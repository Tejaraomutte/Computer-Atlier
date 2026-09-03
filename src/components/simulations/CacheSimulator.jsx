import { useState } from "react";
import { cacheExamples } from "../../data/simulationData.js";
export default function CacheSimulator() {
  const [index, setIndex] = useState(0); const item = cacheExamples[index];
  return <div className="simulation-card"><h2>Cache Simulator</h2><p>Try memory addresses and observe cache hits and misses.</p><div className={`cache-result ${item.result.toLowerCase()}`}><span>{item.address}</span><strong>{item.result}</strong><p>{item.note}</p></div><button className="lesson-button" onClick={() => setIndex((i) => (i + 1) % cacheExamples.length)}>Access next address</button></div>;
}
