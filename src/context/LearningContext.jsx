import { createContext, useContext, useMemo, useState } from "react";

const LearningContext = createContext(null);

export function LearningProvider({ children }) {
  const [completedLessons, setCompletedLessons] = useState([]);
  const [lessonProgress, setLessonProgress] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ca-lesson-progress") || "{}");
    } catch {
      return {};
    }
  });
  const [quizScores, setQuizScores] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ca-quiz-scores") || "{}");
    } catch {
      return {};
    }
  });
  const [notes, setNotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ca-notes") || "[]");
    } catch {
      return [];
    }
  });

  function completeLesson(id) {
    setCompletedLessons((items) => items.includes(id) ? items : [...items, id]);
  }

  function updateLessonProgress(id, progress, score) {
    setLessonProgress((current) => {
      const next = { ...current, [id]: progress };
      localStorage.setItem("ca-lesson-progress", JSON.stringify(next));
      return next;
    });

    if (typeof score === "number") {
      setQuizScores((current) => {
        const next = { ...current, [id]: score };
        localStorage.setItem("ca-quiz-scores", JSON.stringify(next));
        return next;
      });
    }
  }

  function addNote(note) {
    const next = [{ id: Date.now(), text: note }, ...notes];
    setNotes(next);
    localStorage.setItem("ca-notes", JSON.stringify(next));
  }

  function removeNote(id) {
    const next = notes.filter((note) => note.id !== id);
    setNotes(next);
    localStorage.setItem("ca-notes", JSON.stringify(next));
  }

  const value = useMemo(
    () => ({ completedLessons, completeLesson, lessonProgress, updateLessonProgress, quizScores, notes, addNote, removeNote }),
    [completedLessons, lessonProgress, quizScores, notes]
  );

  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>;
}

export function useLearningContext() {
  return useContext(LearningContext);
}
