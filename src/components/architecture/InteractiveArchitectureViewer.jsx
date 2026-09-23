import { useEffect, useMemo, useRef, useState } from "react";
import {
  architectureLabComponents,
  architectureLabCategories,
  architectureLabOrder
} from "../../data/interactiveArchitectureLab.js";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function InteractiveArchitectureViewer() {
  const [selectedId, setSelectedId] = useState("cpu");
  const [category, setCategory] = useState("All");
  const [hoveredHotspotId, setHoveredHotspotId] = useState(null);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0, scale: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);
  const viewportRef = useRef(null);

  const filteredComponents = useMemo(() => {
    return architectureLabOrder
      .map((id) => architectureLabComponents[id])
      .filter((item) => category === "All" || item.category === category);
  }, [category]);

  useEffect(() => {
    if (!filteredComponents.some((item) => item.id === selectedId)) {
      setSelectedId(filteredComponents[0]?.id || "cpu");
    }
  }, [filteredComponents, selectedId]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveHotspot(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectedComponent = architectureLabComponents[selectedId] || architectureLabComponents.cpu;
  const hotspots = selectedComponent.hotspots || [];

  useEffect(() => {
    setHoveredHotspotId(null);
    setActiveHotspot(null);
  }, [selectedId]);

  const updateRotation = (pointerX, pointerY, bounds) => {
    const relativeX = (pointerX - bounds.left) / bounds.width;
    const relativeY = (pointerY - bounds.top) / bounds.height;
    const targetX = (relativeY - 0.5) * -16;
    const targetY = (relativeX - 0.5) * 20;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      setRotation((prev) => ({
        ...prev,
        x: clamp(targetX, -8, 8),
        y: clamp(targetY, -10, 10)
      }));
    });
  };

  const handlePointerMove = (event) => {
    const bounds = viewportRef.current?.getBoundingClientRect();
    if (!bounds) return;

    if (isDragging) {
      const deltaX = event.clientX - dragStartRef.current.x;
      const deltaY = event.clientY - dragStartRef.current.y;
      dragStartRef.current = { x: event.clientX, y: event.clientY };
      setRotation((prev) => ({
        ...prev,
        x: clamp(prev.x - deltaY * 0.12, -8, 8),
        y: clamp(prev.y + deltaX * 0.12, -10, 10)
      }));
      return;
    }

    updateRotation(event.clientX, event.clientY, bounds);
  };

  const handlePointerLeave = () => {
    setRotation((prev) => ({ ...prev, x: 0, y: 0 }));
    setHoveredHotspotId(null);
  };

  const handleWheel = (event) => {
    event.preventDefault();
    setRotation((prev) => ({
      ...prev,
      scale: clamp(prev.scale + (event.deltaY > 0 ? -0.05 : 0.05), 0.9, 1.25)
    }));
  };

  const handleReset = () => {
    setRotation({ x: 0, y: 0, scale: 1 });
    setHoveredHotspotId(null);
    setActiveHotspot(null);
  };

  const openHotspotDetails = (hotspot) => {
    setActiveHotspot(hotspot);
  };

  const selectedHotspot = hotspots.find((hotspot) => hotspot.id === hoveredHotspotId) || hotspots[0];

  return (
    <section className="architecture-lab-shell">
      <div className="architecture-lab-header">
        <div className="architecture-lab-header-left">
          <span className="architecture-lab-kicker">Interactive lab</span>
          <h2>Architecture component explorer</h2>
        </div>
        <div className="architecture-lab-actions">
          <button type="button" className="secondary-button" onClick={() => setHoveredHotspotId(null)}>
            Explore Components
          </button>
          <button type="button" className="primary-button" onClick={handleReset}>
            Reset View
          </button>
        </div>
      </div>

      <div className="architecture-lab-nav">
        {architectureLabCategories.map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="architecture-lab-layout">
        <div className="architecture-lab-main">
          <div className="lab-component-tabs" role="tablist" aria-label="Architecture component selector">
            {filteredComponents.map((item) => (
              <button
                key={item.id}
                type="button"
                className={selectedId === item.id ? "active" : ""}
                onClick={() => setSelectedId(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div
            className="lab-viewport"
            ref={viewportRef}
            onMouseMove={handlePointerMove}
            onMouseLeave={handlePointerLeave}
            onMouseDown={(event) => {
              dragStartRef.current = { x: event.clientX, y: event.clientY };
              setIsDragging(true);
            }}
            onMouseUp={() => setIsDragging(false)}
            onMouseOut={() => setIsDragging(false)}
            onTouchStart={(event) => {
              const touch = event.touches[0];
              dragStartRef.current = { x: touch.clientX, y: touch.clientY };
            }}
            onTouchMove={(event) => {
              const touch = event.touches[0];
              const bounds = viewportRef.current?.getBoundingClientRect();
              if (!bounds) return;
              updateRotation(touch.clientX, touch.clientY, bounds);
            }}
            onTouchEnd={() => setRotation((prev) => ({ ...prev, x: 0, y: 0 }))}
            onWheel={handleWheel}
            aria-label={`${selectedComponent.name} viewer`}
          >
            <div
              className="lab-image-shell"
              style={{
                transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${rotation.scale})`,
                transition: isDragging ? "none" : "transform 180ms ease-out"
              }}
            >
              <img
                src={selectedComponent.image}
                alt={`${selectedComponent.name} architecture illustration`}
                draggable="false"
              />
            </div>

            {hotspots.map((hotspot) => {
              const isActive = hoveredHotspotId === hotspot.id || activeHotspot?.id === hotspot.id;
              return (
                <button
                  key={hotspot.id}
                  type="button"
                  className={`lab-hotspot ${isActive ? "active" : ""}`}
                  style={{
                    left: `${hotspot.x}%`,
                    top: `${hotspot.y}%`,
                    width: `${hotspot.width}%`,
                    height: `${hotspot.height}%`
                  }}
                  onMouseEnter={() => setHoveredHotspotId(hotspot.id)}
                  onMouseLeave={() => setHoveredHotspotId(null)}
                  onFocus={() => setHoveredHotspotId(hotspot.id)}
                  onBlur={() => setHoveredHotspotId(null)}
                  onClick={() => openHotspotDetails(hotspot)}
                  aria-label={`Explore ${hotspot.name}`}
                  title={hotspot.name}
                >
                  <span className="lab-hotspot-label">{hotspot.name}</span>
                </button>
              );
            })}

            {selectedHotspot && (
              <div
                className="lab-tooltip"
                style={{
                  left: `${selectedHotspot.x + 8}%`,
                  top: `${Math.max(selectedHotspot.y - 14, 12)}%`
                }}
              >
                <strong>{selectedHotspot.name}</strong>
                <p>{selectedHotspot.description}</p>
              </div>
            )}
          </div>
        </div>

        <aside className="architecture-lab-sidebar">
          <div className="lab-info-panel">
            <span className="panel-kicker">Component</span>
            <h3>{selectedComponent.name}</h3>
            <p>{selectedComponent.description}</p>

            <div className="lab-facts">
              {selectedComponent.facts.map(([label, value]) => (
                <div key={`${selectedComponent.id}-${label}`} className="lab-fact-row">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="lab-info-panel muted">
            <span className="panel-kicker">Explorer</span>
            <h3>Move your cursor over different parts of the architecture</h3>
            <p>
              {selectedHotspot
                ? `Selected: ${selectedHotspot.name}. Tap or click to open a detailed breakdown.`
                : "Use the hot spots to inspect the main architectural parts and understand how they work together."}
            </p>
          </div>
        </aside>
      </div>

      {activeHotspot && (
        <div className="lab-modal-backdrop" onClick={() => setActiveHotspot(null)}>
          <div
            className="lab-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lab-hotspot-name"
          >
            <button type="button" className="lab-modal-close" onClick={() => setActiveHotspot(null)} aria-label="Close detailed view">
              ×
            </button>
            <div className="lab-modal-header">
              <span className="panel-kicker">Detailed view</span>
              <h3 id="lab-hotspot-name">{activeHotspot.name}</h3>
            </div>

            <img src={selectedComponent.image} alt={`${activeHotspot.name} detail view`} />

            <div className="lab-modal-body">
              <div className="lab-modal-section">
                <h4>Definition</h4>
                <p>{activeHotspot.description}</p>
              </div>
              <div className="lab-modal-section">
                <h4>Purpose</h4>
                <p>{selectedComponent.description}</p>
              </div>
              <div className="lab-modal-section">
                <h4>Key points</h4>
                <ul>
                  {selectedComponent.facts.map(([label, value]) => (
                    <li key={`${activeHotspot.id}-${label}`}>
                      <strong>{label}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
