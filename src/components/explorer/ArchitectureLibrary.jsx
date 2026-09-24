import { useState } from "react";
import {
  Cpu, Calculator, Settings2, Database, Zap, Cable, MemoryStick, Heart,
  MonitorCog, CircuitBoard, HardDrive, Power, Usb, Network, ScanLine,
  ArrowLeftRight, Clock3, FileCode2, Fan, Workflow, Search, X
} from "lucide-react";
import { architectureComponents } from "../../data/architectureData.js";
import { getLocalizedComponents } from "../../data/i18n.js";
import useArchitecture from "../../hooks/useArchitecture.js";

const icons = {
  system: Workflow, cpu: Cpu, control: Settings2, registers: Database,
  alu: Calculator, cache: Zap, bus: Cable, memory: MemoryStick,
  gpu: MonitorCog, motherboard: CircuitBoard, storage: HardDrive,
  power: Power, io: Usb, network: Network, mmu: ScanLine,
  dma: ArrowLeftRight, clock: Clock3, firmware: FileCode2, cooling: Fan
};

export default function ArchitectureLibrary({ selected, onSelect }) {
  const [showAll, setShowAll] = useState(false);
  const { search, setSearch, language, t } = useArchitecture();

  const localizedComponents = getLocalizedComponents(architectureComponents, language);
  const query = search.trim().toLowerCase();
  const isFiltering = Boolean(query);

  const matchingComponents = localizedComponents.filter((item) =>
    `${item.name} ${item.shortName} ${item.category} ${item.description}`
      .toLowerCase()
      .includes(query)
  );

  const visibleComponents = isFiltering
    ? matchingComponents
    : (showAll ? matchingComponents : matchingComponents.slice(0, 7));

  return (
    <aside className="library-panel">
      <div className="panel-heading">
        <span className="panel-eyebrow">{t.architectureLibrary || "ARCHITECTURE LIBRARY"}</span>
        <button className="icon-button" aria-label="Favorite"><Heart size={16} /></button>
      </div>

      <div className="library-quick-search">
        <Search size={14} className="library-search-icon" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t.filterComponents || "Filter components..."}
          aria-label="Filter components in library"
        />
        {search && (
          <button
            type="button"
            className="library-search-clear"
            onClick={() => setSearch("")}
            title="Clear filter"
            aria-label="Clear filter"
          >
            <X size={12} />
          </button>
        )}
      </div>

      {isFiltering && (
        <div className="library-filter-badge">
          <span>{t.resultsFor || "Results:"} <strong>"{search.trim()}"</strong> ({matchingComponents.length})</span>
          <button type="button" onClick={() => setSearch("")} title="Clear filter">✕</button>
        </div>
      )}

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
        {visibleComponents.length === 0 && (
          <div className="library-no-matches">
            <p className="muted">{t.noMatches || "No components found"}</p>
            <button
              type="button"
              className="library-reset-btn"
              onClick={() => setSearch("")}
            >
              {t.showAllComponents || "Show all components"}
            </button>
          </div>
        )}
      </div>

      {!isFiltering && (
        <button className="view-all-button" onClick={() => setShowAll((value) => !value)}>
          {showAll ? (t.showFewer || "Show fewer") : (t.viewAll || "View all")} <span>{showAll ? "↑" : "→"}</span>
        </button>
      )}
    </aside>
  );
}
