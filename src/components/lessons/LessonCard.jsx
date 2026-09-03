import { Link } from "react-router-dom";
export default function LessonCard({ lesson, completed }) {
  return (
    <article className="lesson-card">
      <div className="lesson-meta">{lesson.category} · {lesson.duration} · {lesson.level}</div>
      <h3>{lesson.title}</h3><p>{lesson.summary}</p>
      <Link className="card-link" to={`/en/lessons/${lesson.id}`}>{completed ? "Review lesson →" : "Start lesson →"}</Link>
    </article>
  );
}
