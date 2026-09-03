import { Cpu } from "lucide-react";
export default function SystemCard({ title, description }) {
  return <article className="feature-card"><div className="card-kicker">SYSTEM</div><h3>{title}</h3><div className="abstract-chip"><Cpu size={42}/></div><p>{description}</p></article>;
}
