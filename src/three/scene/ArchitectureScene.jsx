import { Canvas } from "@react-three/fiber";
import Camera from "./Camera.jsx";
import Lighting from "./Lighting.jsx";
import SceneEnvironment from "./Environment.jsx";
import OrbitController from "../controls/OrbitController.jsx";
import { Center, Html } from "@react-three/drei";
import ComponentModel from "../components/ComponentModel.jsx";
import { getComponent } from "../../data/architectureData.js";
import Connection from "../connections/Connection.jsx";
import SystemBus from "../components/SystemBus.jsx";

function SystemModel() {
  const byId = (id) => getComponent(id);
  const parts = [
    ["cpu", [0, 6, 0]], ["control", [-5, 3.1, 0]], ["registers", [0, 3.1, 0]], ["alu", [5, 3.1, 0]],
    ["cache", [8, 0.2, 0]], ["memory", [0, -4.2, 0]], ["gpu", [-8, 0.2, 0]], ["motherboard", [0, -0.2, -3]],
    ["storage", [6.5, -4.2, 0]], ["io-controller", [-6.5, -4.2, 0]], ["network", [10, 3.2, 0]], ["psu", [-10, 3.2, 0]]
  ];
  return <group position={[0, -1, 0]} scale={0.27}>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4.8, -1.5]} receiveShadow><boxGeometry args={[23, 15, 0.18]} /><meshStandardMaterial color="#111827" roughness={0.7} metalness={0.25} /></mesh>
    {parts.map(([id, position]) => <group key={id} position={position}><ComponentModel component={byId(id)} labelPosition={[0, -1.35, 0]} /></group>)}
    <SystemBus />
    <Connection start={[0, 2.8, 0]} end={[0, 1.4, 0]} active />
    <Connection start={[-2.5, 1.7, 0]} end={[-1, 0.6, 0]} active />
    <Connection start={[2.5, 1.7, 0]} end={[1, 0.6, 0]} active />
    <Connection start={[0, -0.5, 0]} end={[0, -1.3, 0]} active />
    <Html position={[0, 8, 0]} center><div className="three-label active" style={{ borderColor: "#c084fc" }}>SYSTEM ARCHITECTURE</div></Html>
  </group>;
}

function World({ selected, controlsRef }) {
  const component = getComponent(selected);
  return <>
    <Camera />
    <Lighting />
    <SceneEnvironment />
    {component.id === "system-architecture" ? <SystemModel /> : <Center><ComponentModel component={component} /></Center>}
    <OrbitController controlsRef={controlsRef} />
  </>;
}

export default function ArchitectureScene({ selected, controlsRef }) {
  return <Canvas shadows dpr={[1, 2]} camera={{ position: [8, 6, 10], fov: 45 }}><World selected={selected} controlsRef={controlsRef} /></Canvas>;
}
