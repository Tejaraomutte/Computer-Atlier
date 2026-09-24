import { useState } from "react";
import { useLearningContext } from "../context/LearningContext.jsx";
import useArchitecture from "../hooks/useArchitecture.js";

export default function Notes() {
  const [text, setText] = useState("");
  const { notes, addNote, removeNote } = useLearningContext();
  const { t } = useArchitecture();

  function save(e) {
    e.preventDefault();
    if (!text.trim()) return;
    addNote(text.trim());
    setText("");
  }

  return (
    <main className="page">
      <div className="page-heading">
        <span>{t.notes?.toUpperCase() || "NOTES"}</span>
        <h1>{t.yourNotes || "Your learning notes"}</h1>
        <p>{t.notesDesc || "Save definitions, exam points and ideas while exploring."}</p>
      </div>

      <form className="note-form" onSubmit={save}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t.writeNote || "Write a note..."}
        />
        <button className="lesson-button" type="submit">
          {t.saveNote || "Save note"}
        </button>
      </form>

      <div className="notes-list">
        {notes.length ? (
          notes.map((n) => (
            <article className="note-card" key={n.id}>
              <p>{n.text}</p>
              <button type="button" onClick={() => removeNote(n.id)}>
                {t.delete || "Delete"}
              </button>
            </article>
          ))
        ) : (
          <p className="muted">{t.noNotes || "No notes yet."}</p>
        )}
      </div>
    </main>
  );
}
