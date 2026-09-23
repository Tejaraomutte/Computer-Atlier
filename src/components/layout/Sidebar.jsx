import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="simple-sidebar">
      <NavLink to="/en/explore">Explore</NavLink>
      <NavLink to="/en/architecture">Architecture</NavLink>
      <NavLink to="/en/lessons">Lessons</NavLink>
      <NavLink to="/en/library">Library</NavLink>
      <NavLink to="/en/quiz">Quiz</NavLink>
    </aside>
  );
}
