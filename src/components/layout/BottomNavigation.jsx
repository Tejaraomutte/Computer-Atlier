import { NavLink } from "react-router-dom";

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/en/explore">Explore</NavLink>
      <NavLink to="/en/lessons">Lessons</NavLink>
      <NavLink to="/en/simulation">Simulation</NavLink>
      <NavLink to="/en/quiz">Quiz</NavLink>
    </nav>
  );
}
