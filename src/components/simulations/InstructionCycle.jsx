import { instructionStages } from "../../data/simulationData.js";
import useSimulation from "../../hooks/useSimulation.js";

export default function InstructionCycle() {
  const sim = useSimulation(instructionStages.length);
  const [title, text] = instructionStages[sim.step];

  return (
    <div className="simulation-card">
      <div className="simulation-stage"><span>STAGE {sim.step + 1}</span><h2>{title}</h2><p>{text}</p></div>
      <div className="stage-list">{instructionStages.map(([name], i) => <div key={name} className={i === sim.step ? "stage active" : "stage"}>{i + 1}<span>{name}</span></div>)}</div>
      <div className="simulation-actions"><button onClick={sim.previous} disabled={sim.isFirst}>← Previous</button><button onClick={sim.next} disabled={sim.isLast}>Next →</button></div>
    </div>
  );
}
