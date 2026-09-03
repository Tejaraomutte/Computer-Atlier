import { Html } from "@react-three/drei";
export default function SystemBus({ visible = true }) {
  if (!visible) return null;
  return <group><mesh position={[0,-1.3,0]} castShadow><boxGeometry args={[8,0.3,0.45]}/><meshStandardMaterial color="#0891b2" emissive="#0891b2" emissiveIntensity={0.25} metalness={0.7} roughness={0.3}/></mesh><Html position={[0,-0.8,0]} center distanceFactor={8}><div className="three-label bus-label">SYSTEM BUS</div></Html></group>;
}
