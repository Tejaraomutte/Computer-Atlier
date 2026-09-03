import { comparisons } from "../../data/comparisonData.js";
import ComparisonTable from "./ComparisonTable.jsx";
export default function Comparison() {
  return <div className="comparison-list">{comparisons.map((item) => <ComparisonTable key={item.title} {...item} />)}</div>;
}
