import { useState } from "react";
const stages = ["Memory", "Control Unit", "Registers", "ALU", "Cache", "Memory"];
export default function DataFlow() {
  const [running, setRunning] = useState(false);
  return <div className="simulation-card"><h2>Animated Data Flow</h2><p>Watch data move through major architecture blocks.</p><div className={`data-flow ${running ? "running" : ""}`}>{stages.map((s, i) => <div className="flow-node" key={`${s}-${i}`}>{s}{i < stages.length - 1 && <span>→</span>}</div>)}</div><button className="lesson-button" onClick={() => setRunning(!running)}>{running ? "Stop animation" : "Start data flow"}</button></div>;
}
