import { Link } from "react-router-dom";
import { architectureSystemCards } from "../../data/architectureSystems.js";
import { getLocalizedSystems } from "../../data/translations/systems.js";
import useArchitecture from "../../hooks/useArchitecture.js";

export default function ArchitectureSystems() {
  const { language, t } = useArchitecture();
  const systems = getLocalizedSystems(architectureSystemCards, language);

  return (
    <main className="page">
      <div className="page-heading">
        <span>{t.systemsSection || "ARCHITECTURE SYSTEMS"}</span>
        <h1>{t.architectureSystemsTitle || "See how processors, memory, and I/O fit together"}</h1>
        <p>{t.architectureSystemsDesc || "Explore the system-level patterns behind some of the most important computer architectures and their trade-offs."}</p>
      </div>

      <div className="lesson-grid memory-lesson-grid">
        {systems.map((card) => (
          <article className="lesson-card memory-card" key={card.id}>
            <div className="lesson-card-header">
              <span className="mini-tag">{card.kicker}</span>
            </div>
            <h3>{card.title}</h3>
            <p>{card.shortDescription}</p>
            <div className="memory-card-meta">
              <span>{card.concept}</span>
            </div>
            <Link className="card-link" to={card.route}>
              {t.exploreSystems || "Explore systems →"}
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
