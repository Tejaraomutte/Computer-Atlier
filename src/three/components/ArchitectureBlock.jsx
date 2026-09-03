import { Html } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function ArchitectureBlock({ id, label, position, color, selected, hidden, isolated, onClick }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + (selected ? Math.sin(state.clock.elapsedTime * 2) * 0.04 : 0);
  });

  if (hidden) return null;
  const opacity = isolated && !selected ? 0.08 : 1;

  return (
    <group position={position}>
      <mesh ref={ref} castShadow receiveShadow onClick={(e) => { e.stopPropagation(); onClick(id); }} scale={selected ? 1.08 : 1}>
        <boxGeometry args={[2.5, 0.75, 1.6]} />
        <meshStandardMaterial color={color} transparent opacity={opacity} metalness={0.65} roughness={0.28} emissive={selected ? color : "#000"} emissiveIntensity={selected ? 0.65 : 0} />
      </mesh>
      {selected && <mesh scale={1.12}><boxGeometry args={[2.5, 0.75, 1.6]} /><meshBasicMaterial color={color} transparent opacity={0.12} wireframe /></mesh>}
      <Html position={[0, 0.62, 0]} center distanceFactor={8}>
        <div className={`three-label ${selected ? "active" : ""}`} style={{ borderColor: color }}>{label}</div>
      </Html>
    </group>
  );
}
