import { Sparkles } from "lucide-react";
import useArchitecture from "../../hooks/useArchitecture.js";

export default function ImportanceCard({ text }) {
  const { t } = useArchitecture();
  return (
    <div className="importance-card">
      <Sparkles size={18} />
      <div><strong>{t.whyMatters}</strong><p>{text}</p></div>
    </div>
  );
}
