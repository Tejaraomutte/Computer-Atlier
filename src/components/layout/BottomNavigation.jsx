import { NavLink } from "react-router-dom";
import { Compass, Building2, BookOpen, NotebookPen, HelpCircle } from "lucide-react";
import useArchitecture from "../../hooks/useArchitecture.js";

export default function BottomNavigation() {
  const { t } = useArchitecture();

  const items = [
    { to: "/en/explore", label: t.explore || "Explore", icon: Compass },
    { to: "/en/architecture", label: t.systems || "Systems", icon: Building2 },
    { to: "/en/lessons", label: t.lessons || "Lessons", icon: BookOpen },
    { to: "/en/notes", label: t.notes || "Notes", icon: NotebookPen },
    { to: "/en/quiz", label: t.quiz || "Quiz", icon: HelpCircle }
  ];

  return (
    <nav className="bottom-nav" aria-label="Mobile Navigation">
      {items.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `bottom-nav-item ${isActive ? "active" : ""}`}
        >
          <div className="bottom-nav-icon-wrap">
            <Icon size={19} />
          </div>
          <span className="bottom-nav-label">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
