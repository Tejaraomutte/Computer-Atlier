import { useState } from "react";
import { Link } from "react-router-dom";
import ArchitectureViewer from "../explorer/ArchitectureViewer.jsx";
import InfoPanel from "../information/InfoPanel.jsx";
import Quiz from "../quiz/Quiz.jsx";

export default function ArchitectureDetailPage({
  title,
  kicker,
  intro,
  overview,
  learningGoals,
  components,
  flow,
  comparison,
  quizQuestions,
  relatedConcepts,
  summaryNotes,
  applications,
  limitations,
  advantages,
  image
}) {
  const [selected, setSelected] = useState(components[0]?.id || "cpu");
  const active = components.find((component) => component.id === selected) || components[0];

  return (
    <main className="page architecture-detail-page">
      <div className="page-heading compact-heading">
        <span>{kicker}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>

      {image ? (
        <div className="architecture-image-stage">
          <img src={image} alt={title} className="architecture-image-full" />
        </div>
      ) : (
        <div className="architecture-3d-layout">
          <div className="architecture-viewer-shell">
            <div className="architecture-mini-tabs">
              {components.map((component) => (
                <button
                  key={component.id}
                  type="button"
                  className={selected === component.id ? "active" : ""}
                  onClick={() => setSelected(component.id)}
                >
                  {component.label}
                </button>
              ))}
            </div>
            <ArchitectureViewer selected={selected} onSelect={setSelected} />
          </div>
          <InfoPanel selected={selected} onAnimate={() => {}} />
        </div>
      )}

      <div className="architecture-summary-grid">
        <div className="feature-card architecture-summary-card">
          <span className="card-kicker">Overview</span>
          <h3>{title}</h3>
          <p>{overview}</p>
          <ul className="bullet-list">
            {learningGoals.map((goal) => <li key={goal}>{goal}</li>)}
          </ul>
        </div>
        <div className="feature-card architecture-summary-card">
          <span className="card-kicker">Why it matters</span>
          <h3>Simple idea</h3>
          <p>{summaryNotes}</p>
          <div className="chip-row">
            {components.map((component) => (
              <button
                key={component.id}
                type="button"
                className={`compact-chip ${selected === component.id ? "active" : ""}`}
                onClick={() => setSelected(component.id)}
              >
                {component.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="architecture-section">
        <div className="section-eyebrow">Working flow</div>
        <h2>Step-by-step working</h2>
        <div className="flow-sequence">
          {flow.map((step, index) => (
            <div key={step} className="flow-step">
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Architecture flow</div>
        <h2>Control and data movement</h2>
        <div className="two-column-grid">
          <div className="info-card">
            <h3>Control flow</h3>
            <p>{active?.controlFlow || "The system coordinates fetch, decode, execute, and write-back steps so the architecture behaves predictably."}</p>
          </div>
          <div className="info-card">
            <h3>Data movement</h3>
            <p>{active?.dataFlow || "The data path carries operands, instruction words, and results between memory, the CPU, and I/O interfaces."}</p>
          </div>
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Component map</div>
        <h2>Essential parts</h2>
        <div className="card-grid triple-grid">
          {components.map((component) => (
            <article key={component.id} className="info-card">
              <span className="mini-tag">{component.label}</span>
              <h3>{component.detail}</h3>
              <p>{component.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Advantages</div>
        <h2>Strengths and limitations</h2>
        <div className="two-column-grid">
          <div className="info-card positive-card">
            <h3>Advantages</h3>
            <ul className="bullet-list">
              {advantages.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
          <div className="info-card negative-card">
            <h3>Limitations</h3>
            <ul className="bullet-list">
              {limitations.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Examples</div>
        <h2>Real-world applications</h2>
        <div className="card-grid triple-grid">
          {applications.map((application) => (
            <article key={application.title} className="info-card">
              <span className="mini-tag">Example</span>
              <h3>{application.title}</h3>
              <p>{application.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Comparison</div>
        <h2>Quick comparison</h2>
        <div className="comparison-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>{title}</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([label, value]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-eyebrow">Key takeaways</div>
        <h2>Important points</h2>
        <ul className="bullet-list summary-list">
          {summaryNotes.split(". ").filter(Boolean).map((item) => <li key={item}>{item.trim()}.</li>)}
        </ul>
      </section>

      <div className="section-actions">
        <Link className="secondary-cta" to="/en/architecture">← Architecture systems</Link>
      </div>

      <section className="architecture-section quiz-section">
        <div className="section-eyebrow">Knowledge check</div>
        <h2>Quiz</h2>
        <Quiz questions={quizQuestions} componentName={title} />
      </section>
    </main>
  );
}
