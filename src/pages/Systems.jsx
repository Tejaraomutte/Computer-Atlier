import { Link } from "react-router-dom";
import { systemData } from "../data/architectureData.js";
export default function Systems() {
  return <main className="page"><div className="page-heading"><span>SYSTEMS</span><h1>Architecture systems</h1><p>Compare the major ways computer systems organize processors, memory and instruction flow.</p></div><div className="content-grid">{systemData.map((s) => <article className="large-card" key={s.id}><span className="card-kicker">SYSTEM</span><h2>{s.title}</h2><p>{s.description}</p><div className="tag-list">{s.tags.map((t) => <span key={t}>{t}</span>)}</div><Link className="card-link" to={`/en/system-output/${s.id}`}>Explore output →</Link></article>)}</div></main>;
}
