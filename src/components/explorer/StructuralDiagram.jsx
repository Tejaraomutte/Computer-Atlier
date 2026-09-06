const kindFor = (id) => {
  if (["memory", "cache", "registers", "storage"].includes(id)) return "storage";
  if (["bus", "network", "io-controller", "dma"].includes(id)) return "flow";
  if (["cooling", "psu"].includes(id)) return "hardware";
  return "logic";
};

export default function StructuralDiagram({ component, parts }) {
  const kind = kindFor(component.id);
  return (
    <div className={`structural-diagram structural-${kind}`} style={{ "--diagram-accent": component.color }}>
      <div className="diagram-header">
        <span>ARCHITECTURE SCHEMATIC</span>
        <strong>{component.category.toUpperCase()}</strong>
      </div>
      <div className="diagram-grid" aria-hidden="true" />
      <div className="diagram-rail diagram-rail-top" aria-hidden="true" />
      <div className="diagram-rail diagram-rail-bottom" aria-hidden="true" />
      <div className="diagram-core">
        <div className="diagram-core-top"><i /> <i /> <i /></div>
        <span>{component.shortName}</span>
        <small>STRUCTURAL VIEW</small>
        <div className="diagram-core-pins"><i /><i /><i /><i /></div>
      </div>
      {parts.map((part, index) => (
        <div className={`diagram-node ${index % 2 === 0 ? "diagram-node-top" : "diagram-node-bottom"}`} key={part.id} style={{ "--node-position": `${18 + (index * 64) / Math.max(parts.length - 1, 1)}%` }}>
          <div className="diagram-connector" aria-hidden="true" />
          <div className="diagram-node-card"><i aria-hidden="true" /><span>{part.name}</span><small>MODULE {String(index + 1).padStart(2, "0")}</small></div>
        </div>
      ))}
      <div className="diagram-footer"><span><i /> ACTIVE SIGNAL</span><span>REV 2.4</span><span>{parts.length} MODULES</span></div>
    </div>
  );
}
