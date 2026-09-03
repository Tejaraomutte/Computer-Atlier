import { useState } from "react";
import { useLearningContext } from "../context/LearningContext.jsx";
export default function Notes() {
  const [text, setText] = useState("");
  const { notes, addNote, removeNote } = useLearningContext();
  function save(e) { e.preventDefault(); if (!text.trim()) return; addNote(text.trim()); setText(""); }
  return <main className="page"><div className="page-heading"><span>NOTES</span><h1>Your learning notes</h1><p>Save definitions, exam points and ideas while exploring.</p></div><form className="note-form" onSubmit={save}><textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a note..."/><button className="lesson-button">Save note</button></form><div className="notes-list">{notes.length ? notes.map((n) => <article className="note-card" key={n.id}><p>{n.text}</p><button onClick={() => removeNote(n.id)}>Delete</button></article>) : <p className="muted">No notes yet.</p>}</div></main>;
}
