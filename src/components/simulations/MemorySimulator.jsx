import { useState } from "react";
export default function MemorySimulator() {
  const [address, setAddress] = useState(4);
  const cells = Array.from({length: 12}, (_, i) => i);
  return <div className="simulation-card"><h2>Memory Address Simulator</h2><p>Select an address to visualize a memory location.</p><input className="range-input" type="range" min="0" max="11" value={address} onChange={(e) => setAddress(Number(e.target.value))}/><div className="memory-grid">{cells.map((cell) => <div key={cell} className={cell === address ? "memory-cell active" : "memory-cell"}>0x{cell.toString(16).padStart(2, "0")}<strong>{cell * 8 + 16}</strong></div>)}</div></div>;
}
