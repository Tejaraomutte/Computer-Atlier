import {
  Compass, BookOpen, NotebookPen,
  Search, Globe, ChevronDown, Building2, X, ArrowRight, Layers
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";
import useArchitecture from "../../hooks/useArchitecture.js";
import { languages, getLocalizedComponents } from "../../data/i18n.js";
import { architectureComponents } from "../../data/architectureData.js";
import { architectureSystemCards } from "../../data/architectureSystems.js";
import { lessons } from "../../data/lessonsData.js";

const links = [
  ["/en/explore", "Explore", Compass],
  ["/en/architecture", "Architecture", Building2],
  ["/en/lessons", "Lessons", BookOpen],
  ["/en/notes", "Notes", NotebookPen]
];

export default function Header() {
  const { search, setSearch, setSelected, language, setLanguage, t } = useArchitecture();
  const [languageOpen, setLanguageOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const query = search.trim().toLowerCase();

  const localizedComponents = useMemo(() => {
    return getLocalizedComponents(architectureComponents, language);
  }, [language]);

  const matchingComponents = useMemo(() => {
    if (!query) return [];
    return localizedComponents.filter((item) =>
      `${item.name} ${item.shortName} ${item.category} ${item.description}`
        .toLowerCase()
        .includes(query)
    ).slice(0, 5);
  }, [query, localizedComponents]);

  const matchingSystems = useMemo(() => {
    if (!query) return [];
    return architectureSystemCards.filter((sys) =>
      `${sys.title} ${sys.shortDescription} ${sys.kicker} ${sys.concept}`
        .toLowerCase()
        .includes(query)
    ).slice(0, 2);
  }, [query]);

  const matchingLessons = useMemo(() => {
    if (!query) return [];
    return lessons.filter((lesson) =>
      `${lesson.title} ${lesson.summary} ${lesson.category}`
        .toLowerCase()
        .includes(query)
    ).slice(0, 3);
  }, [query]);

  const hasResults = matchingComponents.length > 0 || matchingSystems.length > 0 || matchingLessons.length > 0;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (!query) {
      inputRef.current?.focus();
      navigate("/en/explore");
      return;
    }

    if (matchingComponents.length > 0) {
      setSelected(matchingComponents[0].id);
      navigate("/en/explore");
    } else if (matchingSystems.length > 0) {
      navigate(matchingSystems[0].route);
    } else if (matchingLessons.length > 0) {
      navigate(`/en/lessons/${matchingLessons[0].id}`);
    } else {
      navigate("/en/explore");
    }
    setDropdownOpen(false);
  };

  const handleSelectComponent = (id) => {
    setSelected(id);
    setSearch("");
    setDropdownOpen(false);
    navigate("/en/explore");
  };

  const handleSelectLesson = (id) => {
    setSearch("");
    setDropdownOpen(false);
    navigate(`/en/lessons/${id}`);
  };

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

      {/* Interactive Search Bar & Dropdown */}
      <div className="header-search-wrapper" ref={searchContainerRef}>
        <form className="header-search" onSubmit={handleSearchSubmit}>
          <button
            type="submit"
            className="search-submit-btn"
            aria-label="Submit search"
            title="Search (Enter)"
          >
            <Search size={16} />
          </button>

          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setDropdownOpen(true);
            }}
            onFocus={() => {
              if (query) setDropdownOpen(true);
            }}
            placeholder={t.search || "Search components, topics..."}
            autoComplete="off"
            spellCheck="false"
          />

          {search && (
            <div className="search-actions">
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => {
                  setSearch("");
                  setDropdownOpen(false);
                }}
                aria-label="Clear search query"
                title="Clear"
              >
                <X size={13} />
              </button>
              <button
                type="submit"
                className="search-action-btn"
                aria-label="Execute search"
                title="Search"
              >
                {t.search?.split(" ")[0] || "Search"}
              </button>
            </div>
          )}
        </form>

        {/* Live Search Autocomplete Dropdown */}
        {dropdownOpen && query && (
          <div className="search-dropdown-menu" role="listbox">
            {hasResults ? (
              <>
                {matchingComponents.length > 0 && (
                  <div className="search-results-section">
                    <span className="search-section-label">{t.componentsSection || "COMPONENTS"}</span>
                    {matchingComponents.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className="search-result-item"
                        onClick={() => handleSelectComponent(item.id)}
                      >
                        <div className="result-icon">
                          <Layers size={14} />
                        </div>
                        <div className="result-details">
                          <strong className="result-title">{item.name}</strong>
                          <small className="result-desc">{item.category} · {item.tagline}</small>
                        </div>
                        <ArrowRight size={13} className="result-arrow" />
                      </button>
                    ))}
                  </div>
                )}

                {matchingSystems.length > 0 && (
                  <div className="search-results-section">
                    <span className="search-section-label">{t.systemsSection || "SYSTEMS"}</span>
                    {matchingSystems.map((sys) => (
                      <button
                        key={sys.id}
                        type="button"
                        className="search-result-item"
                        onClick={() => {
                          setSearch("");
                          setDropdownOpen(false);
                          navigate(sys.route);
                        }}
                      >
                        <div className="result-icon system-icon">
                          <Building2 size={14} />
                        </div>
                        <div className="result-details">
                          <strong className="result-title">{sys.title}</strong>
                          <small className="result-desc">{sys.kicker} · {sys.concept}</small>
                        </div>
                        <ArrowRight size={13} className="result-arrow" />
                      </button>
                    ))}
                  </div>
                )}

                {matchingLessons.length > 0 && (
                  <div className="search-results-section">
                    <span className="search-section-label">{t.lessonsSection || "LESSONS"}</span>
                    {matchingLessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        type="button"
                        className="search-result-item"
                        onClick={() => handleSelectLesson(lesson.id)}
                      >
                        <div className="result-icon lesson-icon">
                          <BookOpen size={14} />
                        </div>
                        <div className="result-details">
                          <strong className="result-title">{lesson.title}</strong>
                          <small className="result-desc">{lesson.category} · {lesson.duration}</small>
                        </div>
                        <ArrowRight size={13} className="result-arrow" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="search-no-results">
                <span>{t.noSearchResults || "No components, systems, or lessons found"}</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="language-menu">
        <button
          className="language-selector"
          onClick={() => setLanguageOpen((value) => !value)}
          aria-expanded={languageOpen}
        >
          <Globe size={15} /> {languages.find((item) => item.code === language)?.name} <ChevronDown size={14} />
        </button>
        {languageOpen && (
          <div className="language-options" role="menu">
            {languages.map((option) => (
              <button
                key={option.code}
                type="button"
                role="menuitem"
                className={language === option.code ? "active" : ""}
                onClick={() => {
                  setLanguage(option.code);
                  setLanguageOpen(false);
                }}
              >
                {option.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="profile-button">CA</div>
    </header>
  );
}
