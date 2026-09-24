import { useMemo } from "react";
import useArchitecture from "../../hooks/useArchitecture.js";

const kindFor = (id) => {
  if (["memory", "cache", "registers", "storage"].includes(id)) return "storage";
  if (["bus", "network", "io-controller", "dma"].includes(id)) return "flow";
  if (["cooling", "psu"].includes(id)) return "hardware";
  return "logic";
};

export default function StructuralDiagram({
  component,
  parts = [],
  selectedPart = null,
  onSelectPart,
  hoveredPart = null,
  onHoverPart
}) {
  const { t } = useArchitecture();
  const kind = kindFor(component.id);
  const activePartId = hoveredPart || selectedPart;
  const activePart = useMemo(() => {
    return parts.find((part) => part.id === activePartId) || null;
  }, [parts, activePartId]);

  const activeIndex = activePart ? parts.findIndex((p) => p.id === activePart.id) : -1;
  const isTopActive = activeIndex !== -1 && activeIndex % 2 === 0;
  const isBottomActive = activeIndex !== -1 && activeIndex % 2 !== 0;

  return (
    <div
      className={`structural-diagram structural-${kind} ${activePart ? "has-active-part" : ""}`}
      style={{ "--diagram-accent": component.color }}
    >
      <div className="diagram-header">
        <span className="diagram-tag">{t.schematicTag || "ARCHITECTURE SCHEMATIC"}</span>
        <div className="diagram-header-right">
          {activePart ? (
            <span className="diagram-active-badge">
              <span className="badge-pulse" /> {activePart.name}
            </span>
          ) : (
            <strong>{component.category.toUpperCase()}</strong>
          )}
        </div>
      </div>

      <div className="diagram-grid" aria-hidden="true" />
      <div className={`diagram-rail diagram-rail-top ${isTopActive ? "rail-active" : ""}`} aria-hidden="true" />
      <div className={`diagram-rail diagram-rail-bottom ${isBottomActive ? "rail-active" : ""}`} aria-hidden="true" />

      {/* Center Core / Live Functioning Inspector */}
      <div className={`diagram-core ${activePart ? "is-inspecting" : ""}`}>
        <div className="diagram-core-top">
          <i /> <i /> <i />
        </div>

        {activePart ? (
          <div className="diagram-core-active-content">
            <span className="diagram-core-module-tag">
              MODULE {String(activeIndex + 1).padStart(2, "0")} · {activePart.role}
            </span>
            <h4 className="diagram-core-part-name">{activePart.name}</h4>
            <p className="diagram-core-functioning">{activePart.functioning}</p>
            <div className="diagram-core-signal-strip">
              <span className="signal-led" />
              <code>{activePart.signal || "ACTIVE BUS"}</code>
              {selectedPart === activePart.id && <span className="pinned-badge">{t.pinned || "PINNED"}</span>}
            </div>
          </div>
        ) : (
          <div className="diagram-core-default-content">
            <span>{component.shortName}</span>
            <small>{t.structuralView || "STRUCTURAL VIEW"}</small>
            <p className="diagram-core-hint">{t.inspectHint || "Hover or tap any module to inspect functioning"}</p>
          </div>
        )}

        <div className="diagram-core-pins">
          <i /><i /><i /><i />
        </div>
      </div>

      {/* Module Nodes */}
      {parts.map((part, index) => {
        const isTop = index % 2 === 0;
        const isActive = activePart?.id === part.id;
        const isPinned = selectedPart === part.id;
        const total = parts.length;
        const nodePosition = total > 1 ? 14 + (index * 72) / (total - 1) : 50;

        return (
          <div
            key={part.id}
            className={`diagram-node ${isTop ? "diagram-node-top" : "diagram-node-bottom"} ${isActive ? "node-active" : ""} ${isPinned ? "node-pinned" : ""}`}
            style={{ "--node-position": `${nodePosition}%` }}
          >
            <div className={`diagram-connector ${isActive ? "connector-active" : ""}`} aria-hidden="true">
              <span className="connector-pulse" />
            </div>

            <button
              type="button"
              className={`diagram-node-card ${isActive ? "card-active" : ""}`}
              onMouseEnter={() => onHoverPart && onHoverPart(part.id)}
              onMouseLeave={() => onHoverPart && onHoverPart(null)}
              onClick={() => onSelectPart && onSelectPart(selectedPart === part.id ? null : part.id)}
              aria-label={`Inspect ${part.name}`}
            >
              <div className="node-card-indicator">
                <i className="node-marker-dot" aria-hidden="true" />
                <span className="node-module-num">MODULE {String(index + 1).padStart(2, "0")}</span>
              </div>
              <strong className="node-title">{part.name}</strong>
              <small className="node-role">{part.role}</small>
            </button>
          </div>
        );
      })}

      <div className="diagram-footer">
        <span><i /> {activePart ? `SIGNAL: ${activePart.signal}` : (t.activeSignal || "ACTIVE SIGNAL")}</span>
        <span>REV 2.4</span>
        <span>{parts.length} {t.modules || "MODULES"}</span>
      </div>
    </div>
  );
}
