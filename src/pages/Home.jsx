import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SystemCard from "../components/cards/SystemCard.jsx";
import useArchitecture from "../hooks/useArchitecture.js";

export default function Home() {
  const { t } = useArchitecture();

  return (
    <main className="page home-page">
      <section className="hero">
        <div className="hero-kicker">{t.homeKicker || "INTERACTIVE COMPUTER ARCHITECTURE"}</div>
        <h1>{t.homeTitle1 || "Understand computers"}<br/><em>{t.homeTitle2 || "by exploring how they work."}</em></h1>
        <p>{t.homeDesc || "Explore processors, memory, buses, instruction cycles and microarchitecture through interactive 3D models and simulations."}</p>
        <div className="hero-actions">
          <Link className="primary-cta" to="/en/explore">
            {t.exploreArch || "Explore architecture"} <ArrowRight size={17}/>
          </Link>
          <Link className="secondary-cta" to="/en/lessons">
            {t.startLesson || "Start a lesson"}
          </Link>
        </div>
      </section>
      <section className="home-grid">
        <SystemCard
          title={t.procArch || "Processor Architecture"}
          description={t.procArchDesc || "Explore the CPU, ALU, Control Unit and Registers."}
        />
        <SystemCard
          title={t.memHierarchy || "Memory Hierarchy"}
          description={t.memHierarchyDesc || "Understand cache, RAM and the relationship between speed and capacity."}
        />
        <SystemCard
          title={t.instExec || "Instruction Execution"}
          description={t.instExecDesc || "Follow an instruction from Fetch through Write Back."}
        />
      </section>
    </main>
  );
}
