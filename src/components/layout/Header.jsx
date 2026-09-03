import {
  Compass, Cpu, BookOpen, Library as LibraryIcon, NotebookPen,
  Search, Globe, ChevronDown
} from "lucide-react";
import { NavLink } from "react-router-dom";
import useArchitecture from "../../hooks/useArchitecture.js";

const links = [
  ["/en/explore", "Explore", Compass],
  ["/en/systems", "Systems", Cpu],
  ["/en/lessons", "Lessons", BookOpen],
  ["/en/library", "Library", LibraryIcon],
  ["/en/notes", "Notes", NotebookPen]
];

export default function Header() {
  const { search, setSearch } = useArchitecture();

  return (
    <header className="header">
      <NavLink to="/en" className="logo">Computer Atelier<span>✦</span></NavLink>

      <nav className="main-nav">
        {links.map(([to, label, Icon]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>

      <label className="header-search">
        <Search size={16} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search components, topics..."
        />
      </label>

      <button className="language-selector"><Globe size={15} /> English <ChevronDown size={14} /></button>
      <div className="profile-button">CA</div>
    </header>
  );
}
