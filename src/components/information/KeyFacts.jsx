export default function KeyFacts({ facts }) {
  return (
    <div className="facts">
      {facts.map(([label, value]) => (
        <div className="fact-row" key={label}><span>{label}</span><strong>{value}</strong></div>
      ))}
    </div>
  );
}
