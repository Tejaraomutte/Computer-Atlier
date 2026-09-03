import {
  Compass, Cpu, BookOpen, Library as LibraryIcon, NotebookPen,
  Search, Globe, ChevronDown
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useArchitecture from "../../hooks/useArchitecture.js";
import { languages } from "../../data/i18n.js";

const links = [
  ["/en/explore", "Explore", Compass],
  ["/en/systems", "Systems", Cpu],
  ["/en/lessons", "Lessons", BookOpen],
  ["/en/library", "Library", LibraryIcon],
  ["/en/notes", "Notes", NotebookPen]
];

export default function Header() {
  const { search, setSearch, language, setLanguage, t } = useArchitecture();
  const [languageOpen, setLanguageOpen] = useState(false);

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
            {t[label.toLowerCase()] || label}
          </NavLink>
        ))}
      </nav>

      <label className="header-search">
        <Search size={16} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t.search}
        />
      </label>

      <div className="language-menu">
        <button className="language-selector" onClick={() => setLanguageOpen((value) => !value)} aria-expanded={languageOpen}><Globe size={15} /> {languages.find((item) => item.code === language)?.name} <ChevronDown size={14} /></button>
        {languageOpen && <div className="language-options" role="menu">{languages.map((option) => <button key={option.code} type="button" role="menuitem" className={language === option.code ? "active" : ""} onClick={() => { setLanguage(option.code); setLanguageOpen(false); }}>{option.name}</button>)}</div>}
      </div>
      <div className="profile-button">CA</div>
    </header>
  );
}
