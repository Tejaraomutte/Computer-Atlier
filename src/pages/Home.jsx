import { Link } from "react-router-dom";
import { Cpu, Layers3, Play, ArrowRight } from "lucide-react";
import SystemCard from "../components/cards/SystemCard.jsx";

export default function Home() {
  return (
    <main className="page home-page">
      <section className="hero">
        <div className="hero-kicker">INTERACTIVE COMPUTER ARCHITECTURE</div>
        <h1>Understand computers<br/><em>by exploring how they work.</em></h1>
        <p>Explore processors, memory, buses, instruction cycles and microarchitecture through interactive 3D models and simulations.</p>
        <div className="hero-actions"><Link className="primary-cta" to="/en/explore">Explore architecture <ArrowRight size={17}/></Link><Link className="secondary-cta" to="/en/lessons">Start a lesson</Link></div>
      </section>
      <section className="home-grid">
        <SystemCard title="Processor Architecture" description="Explore the CPU, ALU, Control Unit and Registers."/>
        <SystemCard title="Memory Hierarchy" description="Understand cache, RAM and the relationship between speed and capacity."/>
        <SystemCard title="Instruction Execution" description="Follow an instruction from Fetch through Write Back."/>
      </section>
      <section className="home-feature">
        <div><span className="hero-kicker">THE ATELIER EXPERIENCE</span><h2>Click. Rotate. Zoom. Learn.</h2><p>The center of the application is a real-time 3D viewer. Select a component and the learning panel updates instantly.</p></div>
        <div className="home-feature-icon"><Cpu size={70}/><Layers3 size={45}/><Play size={38}/></div>
      </section>
    </main>
  );
}
