import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="simple-sidebar">
      <NavLink to="/en/explore">Explore</NavLink>
      <NavLink to="/en/systems">Systems</NavLink>
      <NavLink to="/en/lessons">Lessons</NavLink>
      <NavLink to="/en/library">Library</NavLink>
      <NavLink to="/en/quiz">Quiz</NavLink>
      <NavLink to="/en/simulation">Simulation</NavLink>
    </aside>
  );
}
