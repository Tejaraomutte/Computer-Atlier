import { createContext, useContext, useMemo, useState } from "react";

const LearningContext = createContext(null);

export function LearningProvider({ children }) {
  const [completedLessons, setCompletedLessons] = useState([]);
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
    () => ({ completedLessons, completeLesson, notes, addNote, removeNote }),
    [completedLessons, notes]
  );

  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>;
}

export function useLearningContext() {
  return useContext(LearningContext);
}
