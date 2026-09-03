import { Sparkles } from "lucide-react";

export default function ImportanceCard({ text }) {
  return (
    <div className="importance-card">
      <Sparkles size={18} />
      <div><strong>Why it matters</strong><p>{text}</p></div>
    </div>
  );
}
