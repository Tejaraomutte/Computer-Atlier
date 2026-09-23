import { getComponent } from "../../data/architectureData.js";
import KeyFacts from "./KeyFacts.jsx";
import ImportanceCard from "./ImportanceCard.jsx";
import ActionButtons from "./ActionButtons.jsx";
import useArchitecture from "../../hooks/useArchitecture.js";

export default function InfoPanel({ selected }) {
  const item = getComponent(selected);
  const { t } = useArchitecture();

  return (
    <aside className="info-panel">
      <div className="info-category">✦ {item.category}</div>
      <h1>{item.name}</h1>
      <div className="tagline">{item.tagline}</div>
      <p className="description">{item.description}</p>
      <div className="separator" />
      <h3 className="facts-title">{t.keyFacts}</h3>
      <KeyFacts facts={item.facts} />
      <ImportanceCard text={item.importance} />
      <ActionButtons />
    </aside>
  );
}
