import { Link } from "react-router-dom";

const diagrams = {
  "von-neumann": {
    eyebrow: "SHARED MEMORY PATH",
    title: "Von Neumann data flow",
    nodes: ["Input", "Memory", "Control Unit", "ALU", "Output"],
    note: "Instructions and data share one memory and one communication pathway.",
    terms: [["Input", "The computer receives a command or data, such as a key press."], ["Memory", "The workspace that stores instructions and data while a program is running."], ["Control Unit", "The coordinator that tells other parts what to do next."], ["ALU", "The calculator inside the CPU. It handles maths and logical comparisons."], ["Output", "The result produced by the computer, such as text on the screen."]]
  },
  harvard: {
    eyebrow: "SEPARATE MEMORY PATHS",
    title: "Harvard data flow",
    nodes: ["Instruction Memory", "Control Unit", "ALU", "Data Memory"],
    note: "Instruction and data memory can be accessed independently for parallel movement.",
    terms: [["Instruction Memory", "Stores the steps of a program."], ["Control Unit", "Reads an instruction and coordinates the work."], ["ALU", "Performs calculations and true/false decisions."], ["Data Memory", "Stores the values a program is using."], ["Separate paths", "Instructions and data can travel at the same time."]]
  },
  pipeline: {
    eyebrow: "OVERLAPPED EXECUTION",
    title: "Five-stage instruction pipeline",
    nodes: ["IF", "ID", "EX", "MEM", "WB"],
    note: "Several instructions occupy different execution stages at the same time.",
    terms: [["IF - Fetch", "Get the next instruction from memory."], ["ID - Decode", "Work out what the instruction means."], ["EX - Execute", "Perform the calculation or operation."], ["MEM - Memory", "Read or write data when the instruction needs it."], ["WB - Write Back", "Save the result in a register for later use."]]
  }
};

export default function SystemOutput({ system }) {
  const diagram = diagrams[system.id] || diagrams["von-neumann"];
  return (
    <main className="system-output-page">
      <Link className="system-output-back" to="/en/systems">← Back to systems</Link>
      <header className="system-output-heading">
        <span>{system.title.toUpperCase()}</span>
        <h1>{diagram.title}</h1>
        <p>{system.description}</p>
      </header>
      <section className={`system-diagram system-diagram-${system.id}`} aria-label={`${system.title} architecture diagram`}>
        <div className="system-diagram-topline"><span>{diagram.eyebrow}</span><small>ACTIVE OUTPUT</small></div>
        <div className="system-flow">
          {diagram.nodes.map((node, index) => (
            <div className="system-flow-step" key={node}>
              <div className="system-flow-node"><small>{String(index + 1).padStart(2, "0")}</small><strong>{node}</strong></div>
              {index < diagram.nodes.length - 1 && <div className="system-flow-arrow" aria-hidden="true">→</div>}
            </div>
          ))}
        </div>
        <p className="system-diagram-note">{diagram.note}</p>
      </section>
      <section className="beginner-guide" aria-labelledby="beginner-guide-title">
        <div className="beginner-guide-heading"><span>BEGINNER GUIDE</span><h2 id="beginner-guide-title">What do these words mean?</h2><p>Read the diagram from left to right. Each box represents a job performed by part of the computer.</p></div>
        <div className="term-grid">
          {diagram.terms.map(([term, explanation]) => <article className="term-card" key={term}><strong>{term}</strong><p>{explanation}</p></article>)}
        </div>
      </section>
    </main>
  );
}
