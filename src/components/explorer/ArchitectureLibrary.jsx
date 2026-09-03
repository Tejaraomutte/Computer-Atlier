import { Cpu, Calculator, Settings2, Database, Zap, Cable, MemoryStick, Heart } from "lucide-react";
import { architectureComponents } from "../../data/architectureData.js";

const icons = { cpu: Cpu, control: Settings2, registers: Database, alu: Calculator, cache: Zap, bus: Cable, memory: MemoryStick };

export default function ArchitectureLibrary({ selected, onSelect }) {
  return (
    <aside className="library-panel">
      <div className="panel-heading">
        <span className="panel-eyebrow">ARCHITECTURE LIBRARY</span>
        <button className="icon-button"><Heart size={16} /></button>
      </div>

      <div className="component-list">
        {architectureComponents.map((item) => {
          const Icon = icons[item.icon] || Cpu;
          return (
            <button
              key={item.id}
              className={`library-item ${selected === item.id ? "selected" : ""}`}
              onClick={() => onSelect(item.id)}
            >
              <div className="component-icon"><Icon size={20} /></div>
              <div className="component-text"><strong>{item.shortName}</strong><small>{item.category}</small></div>
              {selected === item.id && <span className="selected-dot">●</span>}
            </button>
          );
        })}
      </div>

      <button className="view-all-button">View all components <span>→</span></button>
    </aside>
  );
}
