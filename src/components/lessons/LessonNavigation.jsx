import { Link } from "react-router-dom";
export default function LessonNavigation({ nextId }) {
  return <div className="lesson-navigation"><Link to="/en/lessons">← All lessons</Link>{nextId && <Link to={`/en/lessons/${nextId}`}>Next lesson →</Link>}</div>;
}
