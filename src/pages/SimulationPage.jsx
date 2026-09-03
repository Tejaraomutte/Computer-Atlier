import InstructionCycle from "../components/simulations/InstructionCycle.jsx";
import DataFlow from "../components/simulations/DataFlow.jsx";
import ALUSimulator from "../components/simulations/ALUSimulator.jsx";
import CacheSimulator from "../components/simulations/CacheSimulator.jsx";
import PipelineSimulator from "../components/simulations/PipelineSimulator.jsx";
import MemorySimulator from "../components/simulations/MemorySimulator.jsx";

export default function SimulationPage() {
  return <main className="page"><div className="page-heading"><span>SIMULATIONS</span><h1>See architecture in motion</h1><p>Interactive experiments make abstract processor and memory concepts easier to understand.</p></div><div className="simulation-grid"><InstructionCycle/><DataFlow/><ALUSimulator/><CacheSimulator/><PipelineSimulator/><MemorySimulator/></div></main>;
}
