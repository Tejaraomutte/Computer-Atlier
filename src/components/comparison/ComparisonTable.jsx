export default function ComparisonTable({ title, rows }) {
  return <section className="comparison-table"><h2>{title}</h2><table><thead><tr><th>Attribute</th><th>Option A</th><th>Option B</th></tr></thead><tbody>{rows.map(([a,b,c]) => <tr key={a}><td>{a}</td><td>{b}</td><td>{c}</td></tr>)}</tbody></table></section>;
}
