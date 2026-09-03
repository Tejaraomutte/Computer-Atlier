import { useState } from "react";
const stages = ["IF", "ID", "EX", "MEM", "WB"];
export default function PipelineSimulator() {
  const [cycle, setCycle] = useState(5);
  return <div className="simulation-card"><h2>5-Stage Pipeline</h2><div className="pipeline-grid"><div></div>{Array.from({length: cycle}, (_, i) => <div className="cycle-head" key={i}>{i+1}</div>)}{stages.map((stage, r) => <div className="pipeline-row" key={stage}><b>{stage}</b>{Array.from({length: cycle}, (_, c) => <span key={c} className={c >= r && c < r + 2 ? "pipeline-cell active" : "pipeline-cell"} />)}</div>)}</div><button className="lesson-button" onClick={() => setCycle((c) => c >= 9 ? 5 : c + 1)}>Add cycle</button></div>;
}
