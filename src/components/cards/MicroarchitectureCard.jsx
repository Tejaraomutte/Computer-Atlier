import { Microscope } from "lucide-react";
export default function MicroarchitectureCard() {
  return <article className="feature-card"><div className="card-kicker">MICROARCHITECTURE</div><h3>Inside the datapath</h3><div className="abstract-chip"><Microscope size={42}/></div><p>Explore registers, ALU operations and control signals.</p></article>;
}
