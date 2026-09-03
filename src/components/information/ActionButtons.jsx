import { Play, HelpCircle, GitCompare } from "lucide-react";
import { Link } from "react-router-dom";

export default function ActionButtons({ onAnimate }) {
  return (
    <>
      <Link className="lesson-button" to="/en/lessons/cpu-basics">View lesson <span>→</span></Link>
      <div className="action-grid">
        <button onClick={onAnimate}><Play size={16} /> Animate</button>
        <Link to="/en/quiz"><HelpCircle size={16} /> Quiz</Link>
      </div>
      <Link className="compare-button" to="/en/comparison"><GitCompare size={16} /> Compare</Link>
    </>
  );
}
