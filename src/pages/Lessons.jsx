import { lessons } from "../data/lessonsData.js";
import LessonCard from "../components/lessons/LessonCard.jsx";
import { useLearningContext } from "../context/LearningContext.jsx";
export default function Lessons() {
  const { completedLessons } = useLearningContext();
  return <main className="page"><div className="page-heading"><span>LESSONS</span><h1>Learn computer architecture step by step</h1><p>Short lessons supported by interactive visualizations and simulations.</p></div><div className="lesson-grid">{lessons.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} completed={completedLessons.includes(lesson.id)}/>)}</div></main>;
}
