import { useState } from "react";
import { Cpu, Calculator, Settings2, Database, Zap, Cable, MemoryStick, Heart, MonitorCog, CircuitBoard, HardDrive, Power, Usb, Network, ScanLine, ArrowLeftRight, Clock3, FileCode2, Fan, Workflow } from "lucide-react";
import { architectureComponents } from "../../data/architectureData.js";
import useArchitecture from "../../hooks/useArchitecture.js";

const icons = { system: Workflow, cpu: Cpu, control: Settings2, registers: Database, alu: Calculator, cache: Zap, bus: Cable, memory: MemoryStick, gpu: MonitorCog, motherboard: CircuitBoard, storage: HardDrive, power: Power, io: Usb, network: Network, mmu: ScanLine, dma: ArrowLeftRight, clock: Clock3, firmware: FileCode2, cooling: Fan };

export default function ArchitectureLibrary({ selected, onSelect }) {
  const [showAll, setShowAll] = useState(false);
  const { search, t } = useArchitecture();
  const matchingComponents = architectureComponents.filter((item) => `${item.name} ${item.shortName} ${item.category} ${item.description}`.toLowerCase().includes(search.trim().toLowerCase()));
  const visibleComponents = (showAll ? matchingComponents : matchingComponents.slice(0, 7));

  return (
    <aside className="library-panel">
      <div className="panel-heading">
        <span className="panel-eyebrow">{t.architectureLibrary}</span>
        <button className="icon-button"><Heart size={16} /></button>
      </div>

      <div className="component-list">
        {visibleComponents.map((item) => {
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
        {visibleComponents.length === 0 && <p className="muted">{t.noMatches}</p>}
      </div>

      <button className="view-all-button" onClick={() => setShowAll((value) => !value)}>{showAll ? t.showFewer : t.viewAll} <span>{showAll ? "↑" : "→"}</span></button>
    </aside>
  );
}
