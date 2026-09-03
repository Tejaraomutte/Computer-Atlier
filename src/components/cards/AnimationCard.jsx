import { Play } from "lucide-react";
import { Link } from "react-router-dom";
export default function AnimationCard() {
  return <article className="feature-card"><div className="card-kicker">FUNCTION ANIMATION</div><h3>Instruction cycle</h3><div className="abstract-chip"><Play size={42}/></div><Link className="card-link" to="/en/simulation">Play simulation →</Link></article>;
}
