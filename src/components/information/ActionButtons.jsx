import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import useArchitecture from "../../hooks/useArchitecture.js";

export default function ActionButtons() {
  const { t } = useArchitecture();
  return (
    <Link className="lesson-button" to="/en/quiz">
      <HelpCircle size={16} /> {t.quiz || "Quiz"}
    </Link>
  );
}
