import { getComponent } from "../../data/architectureData.js";
import KeyFacts from "./KeyFacts.jsx";
import ImportanceCard from "./ImportanceCard.jsx";
import ActionButtons from "./ActionButtons.jsx";

export default function InfoPanel({ selected, onAnimate }) {
  const item = getComponent(selected);

  return (
    <aside className="info-panel">
      <div className="info-category">✦ {item.category}</div>
      <h1>{item.name}</h1>
      <div className="tagline">{item.tagline}</div>
      <p className="description">{item.description}</p>
      <div className="separator" />
      <h3 className="facts-title">KEY FACTS</h3>
      <KeyFacts facts={item.facts} />
      <ImportanceCard text={item.importance} />
      <ActionButtons onAnimate={onAnimate} />
    </aside>
  );
}
