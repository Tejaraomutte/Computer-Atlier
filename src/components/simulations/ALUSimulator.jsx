import { useState } from "react";
export default function ALUSimulator() {
  const [a, setA] = useState(10); const [b, setB] = useState(5); const [op, setOp] = useState("ADD");
  const result = op === "ADD" ? a + b : op === "SUB" ? a - b : op === "AND" ? (a & b) : (a | b);
  return <div className="simulation-card"><h2>ALU Simulator</h2><div className="sim-inputs"><label>A<input type="number" value={a} onChange={(e) => setA(Number(e.target.value))}/></label><label>B<input type="number" value={b} onChange={(e) => setB(Number(e.target.value))}/></label><label>Operation<select value={op} onChange={(e) => setOp(e.target.value)}><option>ADD</option><option>SUB</option><option>AND</option><option>OR</option></select></label></div><div className="sim-result">Result <strong>{result}</strong></div></div>;
}
