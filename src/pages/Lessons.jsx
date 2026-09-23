import { Link } from "react-router-dom";
import { useLearningContext } from "../context/LearningContext.jsx";
import { memoryLessons } from "../data/lessons/memoryLessons.js";

export default function Lessons() {
  const { completedLessons, quizScores, lessonProgress } = useLearningContext();

  return (
    <main className="page">
      <div className="page-heading">
        <span>LESSONS</span>
        <h1>Memory essentials</h1>
        <p>Simple lessons for beginners on memory hierarchy, main memory, virtual memory, and secondary memory.</p>
      </div>

      <div className="lesson-grid memory-lesson-grid">
        {memoryLessons.map((lesson) => {
          const score = quizScores[lesson.id];
          const progress = lessonProgress[lesson.id] ?? (completedLessons.includes(lesson.id) ? 100 : 0);
          const firstPoint = lesson.sections[0]?.text || "Learn the concept in a simple, beginner-friendly way.";

          return (
            <article className="lesson-card memory-card" key={lesson.id}>
              <div className="lesson-card-header">
                <span className="mini-tag">{lesson.category}</span>
                <span className="status-dot">{completedLessons.includes(lesson.id) ? "Completed" : "Beginner"}</span>
              </div>
              <h3>{lesson.title}</h3>
              <p>{lesson.summary}</p>
              <div className="memory-card-note">{firstPoint}</div>
              <div className="memory-card-progress">
                <div className="progress-track"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
                <span>{progress}%</span>
              </div>
              <div className="memory-card-meta">
                {score !== undefined ? <span>Quiz: {score}/{lesson.objectives.length || 5}</span> : <span>Quiz: not attempted</span>}
              </div>
              <Link className="card-link" to={`/en/lessons/${lesson.id}`}>Explore lesson →</Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}
