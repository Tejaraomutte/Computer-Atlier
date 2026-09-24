import { useEffect, useRef, useState } from "react";
import ArchitectureScene from "../../three/scene/ArchitectureScene.jsx";
import Hotspot from "./Hotspot.jsx";
import StructuralDiagram from "./StructuralDiagram.jsx";
import { getComponent } from "../../data/architectureData.js";
import useViewer from "../../hooks/useViewer.js";
import useArchitecture from "../../hooks/useArchitecture.js";

export default function ArchitectureViewer({ selected, onSelect }) {
  const controlsRef = useRef();
  const viewerRef = useRef(null);
  const { language, t } = useArchitecture();
  const { isolated, setIsolated, dataFlow, setDataFlow, layers } = useViewer();
  const [viewMode, setViewMode] = useState("description");
  const [selectedPart, setSelectedPart] = useState(null);
  const [hoveredPart, setHoveredPart] = useState(null);

  const item = getComponent(selected, language);
  const activePartId = hoveredPart || selectedPart;
  const activePart = item.media.parts.find((part) => part.id === activePartId);

  useEffect(() => {
    setSelectedPart(null);
    setHoveredPart(null);
    setViewMode("description");
  }, [selected]);

  const componentImageOptions = {
    "system-architecture": ["/images/motherboard.png"],
    cpu: ["/images/cpu.png"],
    control: ["/images/cu.png"],
    registers: ["/images/registers.png"],
    alu: ["/images/alu.png"],
    cache: ["/images/cache.png"],
    bus: ["/images/systembus.png"],
    memory: ["/images/ram.png"],
    gpu: ["/images/gpu.png"],
    motherboard: ["/images/motherboard.png"],
    storage: ["/images/ssd.png"],
    psu: ["/images/psu.png"],
    "io-controller": ["/images/inputoutput.png"],
    network: ["/images/nic.png"],
    mmu: ["/images/mmu.png"],
    dma: ["/images/dma.png"],
    clock: ["/images/systemclock.png"],
    firmware: ["/images/firmware.png"],
    cooling: ["/images/cooling.png"]
  };

  const selectedImage = componentImageOptions[selected]?.[0] || "/images/cpu.png";
  const isSystemArchitecture = selected === "system-architecture";
  const isCpuImageScene = !isSystemArchitecture && Boolean(componentImageOptions[selected]);
  const stageTitle = item?.name || "CPU";
  const stageSubtitle = item?.tagline || item?.description || "Complete architecture information";

  return (
    <main className="viewer-panel">
      {viewMode === "description" && isCpuImageScene && (
        <div className="viewer-asset-header">
          <span className="viewer-asset-kicker">{t.completeInfo || "COMPLETE INFORMATION"}</span>
          <h2>{stageTitle}</h2>
          <p>{stageSubtitle}</p>
        </div>
      )}

      <div className="canvas-container">
        {viewMode === "image" ? (
          <section className="image-viewer" aria-label={`${item.name} architecture image viewer`}>
            <div className="image-viewer-heading">
              <span>{t.componentView || "Component View"}</span>
              <strong>{activePart ? `${activePart.name} · ${activePart.role}` : item.name}</strong>
            </div>

            <div className="component-image-wrap">
              <StructuralDiagram
                component={item}
                parts={item.media.parts}
                selectedPart={selectedPart}
                onSelectPart={setSelectedPart}
                hoveredPart={hoveredPart}
                onHoverPart={setHoveredPart}
              />

              {item.media.parts.map((part) => (
                <Hotspot
                  key={part.id}
                  position={part.position}
                  label={part.name}
                  role={part.role}
                  color={item.color}
                  isActive={activePartId === part.id}
                  onClick={() => setSelectedPart(selectedPart === part.id ? null : part.id)}
                  onMouseEnter={() => setHoveredPart(part.id)}
                  onMouseLeave={() => setHoveredPart(null)}
                />
              ))}
            </div>

            <div className="image-viewer-caption">
              {activePart ? (
                <div className="active-part-caption">
                  <span className="caption-badge">{t.functioning || "FUNCTIONING"}</span>
                  <span className="caption-text">{activePart.functioning}</span>
                  {selectedPart && (
                    <button type="button" className="caption-clear-btn" onClick={() => setSelectedPart(null)}>
                      {t.backOverview || "Back to overview"}
                    </button>
                  )}
                </div>
              ) : (
                <span className="caption-default-hint">
                  {t.pointMarkerHint || "Point to a marker or hover over any module to inspect its functioning"}
                </span>
              )}
            </div>
          </section>
        ) : isSystemArchitecture ? (
          <ArchitectureScene
            selected={selected}
            onSelect={onSelect}
            isolated={isolated}
            layers={layers}
            dataFlow={dataFlow}
            controlsRef={controlsRef}
          />
        ) : isCpuImageScene ? (
          <div ref={viewerRef} className="cpu-static-scene">
            <img
              src={selectedImage}
              alt={`${selected} architecture illustration`}
              draggable="false"
              onError={(event) => {
                if (!event.target.dataset.fallbackApplied) {
                  event.target.dataset.fallbackApplied = "true";
                  event.target.src = "/images/cpu.png";
                }
              }}
            />
          </div>
        ) : (
          <ArchitectureScene
            selected={selected}
            onSelect={onSelect}
            isolated={isolated}
            layers={layers}
            dataFlow={dataFlow}
            controlsRef={controlsRef}
          />
        )}
      </div>

      <div className="viewer-mode-switch" role="group" aria-label="Viewer mode">
        <button
          type="button"
          className={viewMode === "description" ? "active" : ""}
          onClick={() => setViewMode("description")}
        >
          {isSystemArchitecture ? (t.scene3D || "3D Scene") : (t.detailedVersion || "Detailed Version")}
        </button>
        <button
          type="button"
          className={viewMode === "image" ? "active" : ""}
          onClick={() => setViewMode("image")}
        >
          {t.componentView || "Component View"}
        </button>
      </div>

      {viewMode === "description" && !isCpuImageScene && (
        <div className="viewer-footer">{t.threeFooter}</div>
      )}
    </main>
  );
}
