import { architectureComponents } from "../data/architectureData.js";
import { lessons } from "../data/lessonsData.js";
export default function Library() {
  return <main className="page"><div className="page-heading"><span>LIBRARY</span><h1>Computer architecture reference</h1><p>Quick-reference material for the main components and concepts.</p></div><div className="content-grid">{architectureComponents.map((item) => <article className="large-card" key={item.id}><span className="card-kicker">{item.category}</span><h2>{item.name}</h2><p>{item.description}</p><div className="facts-mini">{item.facts.slice(0,2).map(([a,b]) => <div key={a}><span>{a}</span><strong>{b}</strong></div>)}</div></article>)}</div><h2 className="section-title">Learning paths</h2><div className="lesson-grid">{lessons.map((l) => <article className="lesson-card" key={l.id}><h3>{l.title}</h3><p>{l.summary}</p></article>)}</div></main>;
}
