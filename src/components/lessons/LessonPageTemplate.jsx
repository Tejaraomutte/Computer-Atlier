import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLearningContext } from "../../context/LearningContext.jsx";
import LessonProgress from "./LessonProgress.jsx";
import Quiz from "../quiz/Quiz.jsx";

export default function LessonPageTemplate({
  lesson,
  previousRoute,
  nextRoute,
  quizQuestions,
  overview,
  objectives,
  sections,
  components,
  advantages,
  limitations,
  examples,
  relatedConcepts,
  takeaways,
  diagramTitle
}) {
  const { completedLessons, completeLesson, lessonProgress, updateLessonProgress, quizScores } = useLearningContext();
  const [progress, setProgress] = useState(lessonProgress[lesson.id] ?? (completedLessons.includes(lesson.id) ? 100 : 0));

  useEffect(() => {
    const nextValue = lessonProgress[lesson.id] ?? (completedLessons.includes(lesson.id) ? 100 : 0);
    setProgress(nextValue);
  }, [completedLessons, lesson.id, lessonProgress]);

  const currentScore = quizScores[lesson.id];

  function handleQuizComplete(score, total) {
    const nextPercent = Math.max(progress, Math.min(100, Math.round((score / total) * 100)));
    updateLessonProgress(lesson.id, nextPercent, score);
    completeLesson(lesson.id);
    setProgress(nextPercent);
  }

  return (
    <main className="page lesson-page">
      <Link className="back-link" to="/en/lessons">← Lessons</Link>
      <div className="page-heading">
        <span>{lesson.category}</span>
        <h1>{lesson.title}</h1>
        <p>{overview}</p>
      </div>

      <div className="lesson-progress-panel">
        <LessonProgress value={progress} />
        <div className="status-badges">
          <span className="status-badge">{completedLessons.includes(lesson.id) ? "Completed" : "In progress"}</span>
          {currentScore !== undefined && <span className="status-badge secondary">Quiz: {currentScore}/{quizQuestions.length}</span>}
        </div>
      </div>

      <section className="architecture-section">
        <div className="section-eyebrow">Learning objectives</div>
        <h2>What you will learn</h2>
        <ul className="bullet-list">
          {objectives.map((objective) => <li key={objective}>{objective}</li>)}
        </ul>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Overview</div>
        <h2>{diagramTitle}</h2>
        <div className="diagram-grid architecture-diagram single-diagram">
          {sections.map((section) => (
            <div key={section.title} className="diagram-node section-node">
              <small>{section.title}</small>
              <strong>{section.text.slice(0, 64)}...</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Concept explanation</div>
        <h2>Architecture explanation</h2>
        <div className="card-grid triple-grid">
          {sections.map((section) => (
            <article key={section.title} className="info-card">
              <span className="mini-tag">{section.title}</span>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Components</div>
        <h2>Major components</h2>
        <div className="card-grid triple-grid">
          {components.map((component) => (
            <article key={component.name} className="info-card">
              <span className="mini-tag">Component</span>
              <h3>{component.name}</h3>
              <p>{component.explanation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Examples</div>
        <h2>Real-world examples</h2>
        <div className="card-grid triple-grid">
          {examples.map((example) => (
            <article key={example.title} className="info-card">
              <span className="mini-tag">Example</span>
              <h3>{example.title}</h3>
              <p>{example.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Technical note</div>
        <h2>Advantages and limitations</h2>
        <div className="two-column-grid">
          <div className="info-card positive-card">
            <h3>Advantages</h3>
            <ul className="bullet-list">
              {advantages.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
          <div className="info-card negative-card">
            <h3>Limitations</h3>
            <ul className="bullet-list">
              {limitations.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Connected ideas</div>
        <h2>Related concepts</h2>
        <div className="chip-row">
          {relatedConcepts.map((concept) => <span key={concept} className="tag-chip">{concept}</span>)}
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Key takeaways</div>
        <h2>Summary</h2>
        <ul className="bullet-list summary-list">
          {takeaways.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </section>

      <section className="architecture-section quiz-section">
        <div className="section-eyebrow">Knowledge check</div>
        <h2>Quiz</h2>
        <Quiz questions={quizQuestions} componentName={lesson.title} onComplete={handleQuizComplete} />
      </section>

      <div className="lesson-nav">
        {previousRoute ? <Link to={previousRoute}>← Previous topic</Link> : <span />}
        <Link to="/en/lessons">Back to lessons</Link>
        {nextRoute ? <Link to={nextRoute}>Next topic →</Link> : <span />}
      </div>
    </main>
  );
}
