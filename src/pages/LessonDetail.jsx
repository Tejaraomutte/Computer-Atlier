import { Link, useParams } from "react-router-dom";
import { lessons } from "../data/lessonsData.js";
import LessonContent from "../components/lessons/LessonContent.jsx";
import LessonProgress from "../components/lessons/LessonProgress.jsx";
import LessonNavigation from "../components/lessons/LessonNavigation.jsx";
import { useLearningContext } from "../context/LearningContext.jsx";
import { useState } from "react";

export default function LessonDetail() {
  const { lessonId } = useParams();
  const lesson = lessons.find((x) => x.id === lessonId) || lessons[0];
  const { completedLessons, completeLesson } = useLearningContext();
  const [done, setDone] = useState(completedLessons.includes(lesson.id));

  function finish() { completeLesson(lesson.id); setDone(true); }

  return <main className="page lesson-detail"><Link className="back-link" to="/en/lessons">← Lessons</Link><div className="page-heading"><span>{lesson.category}</span><h1>{lesson.title}</h1><p>{lesson.summary}</p></div><LessonProgress value={done ? 100 : 0}/><LessonContent sections={lesson.sections}/><button className="lesson-button complete-button" onClick={finish}>{done ? "Lesson completed ✓" : "Mark lesson complete"}</button><LessonNavigation nextId={lessons[lessons.findIndex((x) => x.id === lesson.id) + 1]?.id}/></main>;
}
