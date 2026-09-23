import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ActionButtons() {
  return (
    <Link className="lesson-button" to="/en/quiz"><HelpCircle size={16} /> Quiz</Link>
  );
}
