import { GitCompare } from "lucide-react";
import { Link } from "react-router-dom";
export default function ComparisonCard() {
  return <article className="feature-card"><div className="card-kicker">COMPARE</div><h3>RISC vs CISC</h3><div className="abstract-chip"><GitCompare size={42}/></div><Link className="card-link" to="/en/comparison">Open comparison →</Link></article>;
}
