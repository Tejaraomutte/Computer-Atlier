import { NotebookPen } from "lucide-react";
import { Link } from "react-router-dom";
export default function NotesCard() {
  return <article className="feature-card"><div className="card-kicker">YOUR NOTES</div><h3>Save what you learn</h3><div className="abstract-chip"><NotebookPen size={42}/></div><Link className="card-link" to="/en/notes">Open notes →</Link></article>;
}
