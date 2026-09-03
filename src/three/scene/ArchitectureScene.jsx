import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import Camera from "./Camera.jsx";
import Lighting from "./Lighting.jsx";
import SceneEnvironment from "./Environment.jsx";
import OrbitController from "../controls/OrbitController.jsx";
import ArchitectureBlock from "../components/ArchitectureBlock.jsx";
import SystemBus from "../components/SystemBus.jsx";
import Connection from "../connections/Connection.jsx";
import DataParticle from "../effects/DataParticle.jsx";

function World({ selected, onSelect, isolated, layers, dataFlow, controlsRef }) {
  const show = (key) => layers[key] !== false;
  return <>
    <Camera /><Lighting /><SceneEnvironment />
    <mesh rotation={[-Math.PI/2,0,0]} position={[0,-3.85,0]} receiveShadow>
      <cylinderGeometry args={[4.6,4.6,0.25,64]}/>
      <meshStandardMaterial color="#111827" roughness={0.7} metalness={0.25}/>
    </mesh>

    {show("cpu") && <ArchitectureBlock id="control" label="CONTROL UNIT" position={[0,2.7,0]} color="#3b82f6" selected={selected==="control"} isolated={isolated} onClick={onSelect}/>}
    {show("datapath") && <ArchitectureBlock id="registers" label="REGISTERS" position={[-3,0.8,0]} color="#a855f7" selected={selected==="registers"} isolated={isolated} onClick={onSelect}/>}
    {show("datapath") && <ArchitectureBlock id="alu" label="ALU" position={[0,0.8,0]} color="#ec4899" selected={selected==="alu"} isolated={isolated} onClick={onSelect}/>}
    {show("memory") && <ArchitectureBlock id="cache" label="CACHE" position={[3,0.8,0]} color="#f59e0b" selected={selected==="cache"} isolated={isolated} onClick={onSelect}/>}
    {show("system") && <SystemBus />}
    {show("memory") && <ArchitectureBlock id="memory" label="MAIN MEMORY" position={[0,-3.1,0]} color="#22c55e" selected={selected==="memory"} isolated={isolated} onClick={onSelect}/>}

    {show("system") && <>
      <Connection start={[0,2.3,0]} end={[0,1.2,0]} active={selected==="control"} />
      <Connection start={[-3,0.4,0]} end={[0,-1.1,0]} active={selected==="registers"} />
      <Connection start={[0,0.4,0]} end={[0,-1.1,0]} active={selected==="alu"} />
      <Connection start={[3,0.4,0]} end={[0,-1.1,0]} active={selected==="cache"} />
      <Connection start={[0,-1.5,0]} end={[0,-2.5,0]} active={selected==="memory"} />
    </>}

    <DataParticle enabled={dataFlow} />
    <OrbitController controlsRef={controlsRef} />
  </>;
}

export default function ArchitectureScene(props) {
  return <Canvas shadows dpr={[1,2]} camera={{position:[8,6,10], fov:45}}><World {...props}/></Canvas>;
}
