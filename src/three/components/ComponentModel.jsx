import { Html, RoundedBox } from "@react-three/drei";

function FallbackModel({ id, color }) {
  const material = { color, metalness: 0.55, roughness: 0.3 };

  if (id === "cpu") {
    return (
      <group>
        <RoundedBox args={[4.1, 0.5, 3.4]} radius={0.18} smoothness={5}><meshStandardMaterial color="#1f2937" metalness={0.78} roughness={0.24} /></RoundedBox>
        <RoundedBox position={[0, 0.48, 0]} args={[2.7, 0.28, 2.5]} radius={0.12} smoothness={4}><meshStandardMaterial color={color} metalness={0.45} roughness={0.28} /></RoundedBox>
        <mesh position={[0, 1.04, 0]}><cylinderGeometry args={[0.9, 0.9, 0.14, 32]} /><meshStandardMaterial color="#dbeafe" metalness={0.9} roughness={0.16} /></mesh>
        <group position={[-1.8, 0.1, -1.2]}>{[-0.7, 0, 0.7].map((x) => <mesh key={x} position={[x, 0, 0]}><boxGeometry args={[0.26, 0.12, 0.26]} /><meshStandardMaterial color="#f59e0b" /></mesh>)}</group>
        <group position={[1.9, 0.1, 1.05]}>{[-0.7, 0, 0.7].map((x) => <mesh key={x} position={[x, 0, 0]}><boxGeometry args={[0.26, 0.12, 0.26]} /><meshStandardMaterial color="#22d3ee" /></mesh>)}</group>
      </group>
    );
  }

  if (id === "control") {
    return (
      <group>
        <RoundedBox args={[3.8, 1, 2.8]} radius={0.2} smoothness={5}><meshStandardMaterial {...material} color="#2563eb" /></RoundedBox>
        <mesh position={[0, 0.72, 0]}><boxGeometry args={[2.2, 0.1, 1.7]} /><meshStandardMaterial color="#dbeafe" metalness={0.6} roughness={0.18} /></mesh>
        <group position={[-0.8, 0.9, 0]}>{[-0.5, 0.5].map((x) => <mesh key={x} position={[x, 0, 0]}><boxGeometry args={[0.38, 0.22, 0.7]} /><meshStandardMaterial color="#60a5fa" emissive="#1d4ed8" emissiveIntensity={0.2} /></mesh>)}</group>
        <group position={[1.1, 0.9, 0]}>{[-0.5, 0.5].map((x) => <mesh key={x} position={[x, 0, 0]}><boxGeometry args={[0.38, 0.22, 0.7]} /><meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={0.2} /></mesh>)}</group>
      </group>
    );
  }

  if (id === "registers") {
    return (
      <group>
        {[-1.2, -0.4, 0.4, 1.2].map((x) => (
          <group key={x} position={[x, 0, 0]}>
            <RoundedBox args={[0.7, 0.9, 2.2]} radius={0.08} smoothness={4}><meshStandardMaterial {...material} color="#7c3aed" /></RoundedBox>
            <mesh position={[0, 0.48, 0]}><boxGeometry args={[0.35, 0.06, 1.5]} /><meshStandardMaterial color="#f5d0fe" emissive="#c026d3" emissiveIntensity={0.35} /></mesh>
          </group>
        ))}
      </group>
    );
  }

  if (id === "alu") {
    return (
      <group>
        <mesh rotation={[0, Math.PI / 4, 0]}><cylinderGeometry args={[1.8, 1.8, 0.7, 6]} /><meshStandardMaterial {...material} color="#db2777" /></mesh>
        <mesh position={[0, 0.52, 0]}><boxGeometry args={[1.8, 0.08, 1.8]} /><meshStandardMaterial color="#fce7f3" metalness={0.8} /></mesh>
        <mesh position={[0, -0.02, 0]}><boxGeometry args={[0.35, 1.2, 0.35]} /><meshStandardMaterial color="#fbbf24" /></mesh>
        {[-1.05, 1.05].map((x) => <mesh key={x} position={[x, 0.18, 0]}><cylinderGeometry args={[0.18, 0.18, 0.9, 12]} /><meshStandardMaterial color="#fbbf24" /></mesh>)}
      </group>
    );
  }

  if (id === "cache") {
    return (
      <group>
        {[-1.05, 0, 1.05].map((x, index) => (
          <RoundedBox key={x} position={[x, index * 0.12, 0]} args={[0.7, 0.8, 2.3]} radius={0.08} smoothness={4}><meshStandardMaterial {...material} color="#d97706" /></RoundedBox>
        ))}
        <mesh position={[0, 0.75, 0]}><boxGeometry args={[2.5, 0.08, 2.1]} /><meshStandardMaterial color="#fde68a" metalness={0.7} /></mesh>
      </group>
    );
  }

  if (id === "bus") {
    return (
      <group>
        {[-0.6, 0, 0.6].map((x) => <mesh key={x} position={[x, 0, 0]}><boxGeometry args={[0.24, 0.24, 5.8]} /><meshStandardMaterial color="#0891b2" emissive="#0e7490" emissiveIntensity={0.3} metalness={0.78} /></mesh>)}
        {[-2.2, -1.1, 0, 1.1, 2.2].map((z) => <mesh key={z} position={[0, 0, z]}><boxGeometry args={[1.15, 0.28, 0.12]} /><meshStandardMaterial color="#67e8f9" metalness={0.7} /></mesh>)}
      </group>
    );
  }

  if (id === "ram" || id === "memory") {
    return (
      <group rotation={[0, 0, Math.PI / 2]}>
        <RoundedBox args={[6, 1.3, 0.28]} radius={0.1} smoothness={4}><meshStandardMaterial {...material} color="#166534" /></RoundedBox>
        {[-2.1, -1.05, 0, 1.05, 2.1].map((x) => <mesh key={x} position={[x, 0, 0.18]}><boxGeometry args={[0.7, 0.85, 0.1]} /><meshStandardMaterial color="#d4a72c" metalness={0.7} /></mesh>)}
        <mesh position={[0, -0.72, 0]}><boxGeometry args={[6.1, 0.06, 0.5]} /><meshStandardMaterial color="#d4a72c" /></mesh>
      </group>
    );
  }

  if (id === "gpu") {
    return (
      <group rotation={[0, 0, Math.PI / 2]}>
        <RoundedBox args={[5.2, 2.3, 0.34]} radius={0.12} smoothness={4}><meshStandardMaterial {...material} color="#164e63" /></RoundedBox>
        <mesh position={[0, 0, 0.26]}><boxGeometry args={[2.1, 1.5, 0.14]} /><meshStandardMaterial color="#dbeafe" /></mesh>
        <mesh position={[0, 0, 0.36]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.8, 0.1, 12, 32]} /><meshStandardMaterial color="#94a3b8" /></mesh>
        {[-1.1, 0, 1.1].map((x) => <mesh key={x} position={[x, 0, 0.2]}><boxGeometry args={[0.8, 0.8, 0.12]} /><meshStandardMaterial color="#34d399" emissive="#059669" /></mesh>)}
      </group>
    );
  }

  if (id === "motherboard") {
    return (
      <group>
        <RoundedBox args={[6.3, 0.26, 4.5]} radius={0.12} smoothness={4}><meshStandardMaterial {...material} color="#14532d" /></RoundedBox>
        <mesh position={[-1.8, 0.38, 0.4]}><boxGeometry args={[1.8, 0.18, 1.8]} /><meshStandardMaterial color="#64748b" metalness={0.8} /></mesh>
        <mesh position={[1.8, 0.38, 0.7]}><boxGeometry args={[1.5, 0.2, 2]} /><meshStandardMaterial color="#3b82f6" metalness={0.8} /></mesh>
        {[-2.1, -1.2, -0.3, 0.6, 1.5].map((z) => <mesh key={z} position={[0, 0.4, z]}><boxGeometry args={[0.24, 0.12, 0.46]} /><meshStandardMaterial color="#f59e0b" /></mesh>)}
      </group>
    );
  }

  if (id === "storage") {
    return (
      <group rotation={[0, 0, Math.PI / 2]}>
        <RoundedBox args={[3.8, 1.5, 0.34]} radius={0.18} smoothness={4}><meshStandardMaterial {...material} color="#475569" /></RoundedBox>
        <mesh position={[0, 0, 0.2]}><boxGeometry args={[1.8, 0.16, 0.08]} /><meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" /></mesh>
        <mesh position={[0, 0.9, 0]}><boxGeometry args={[2.2, 0.12, 0.08]} /><meshStandardMaterial color="#a78bfa" /></mesh>
      </group>
    );
  }

  if (id === "psu") {
    return (
      <group>
        <RoundedBox args={[3.8, 2.3, 2.6]} radius={0.22} smoothness={4}><meshStandardMaterial {...material} color="#1e293b" /></RoundedBox>
        <mesh position={[0, 0.3, 1.45]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.72, 0.72, 0.12, 32]} /><meshStandardMaterial color="#0f172a" /></mesh>
        <mesh position={[0, 0.3, 1.52]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.6, 0.08, 12, 32]} /><meshStandardMaterial color="#94a3b8" /></mesh>
      </group>
    );
  }

  if (id === "network") {
    return (
      <group rotation={[0, 0, Math.PI / 2]}>
        <RoundedBox args={[4.1, 1.4, 0.25]} radius={0.12} smoothness={4}><meshStandardMaterial {...material} color="#064e3b" /></RoundedBox>
        {[-1.2, 0, 1.2].map((x) => <mesh key={x} position={[x, 0, 0.2]}><boxGeometry args={[0.6, 0.6, 0.08]} /><meshStandardMaterial color="#22c55e" emissive="#166534" /></mesh>)}
      </group>
    );
  }

  if (id === "cooling") {
    return (
      <group>
        <mesh><cylinderGeometry args={[1.8, 1.8, 0.34, 32]} /><meshStandardMaterial color="#64748b" metalness={0.8} /></mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.3, 0.12, 12, 32]} /><meshStandardMaterial color="#38bdf8" /></mesh>
        <mesh position={[0, 0.26, 0]}><boxGeometry args={[0.9, 0.14, 0.9]} /><meshStandardMaterial color="#e2e8f0" /></mesh>
      </group>
    );
  }

  if (id === "io-controller" || id === "dma" || id === "mmu") {
    return (
      <group>
        <RoundedBox args={[3.1, 0.58, 2.2]} radius={0.14} smoothness={4}><meshStandardMaterial {...material} color="#0891b2" /></RoundedBox>
        {[-0.9, 0, 0.9].map((x) => <mesh key={x} position={[x, 0.45, 0]}><cylinderGeometry args={[0.14, 0.14, 0.24, 16]} /><meshStandardMaterial color="#fbbf24" /></mesh>)}
      </group>
    );
  }

  return (
    <group>
      <RoundedBox args={[2.8, 0.72, 2.8]} radius={0.3} smoothness={5}><meshStandardMaterial {...material} /></RoundedBox>
      <mesh position={[0, 0.42, 0]}><boxGeometry args={[1.5, 0.06, 1.5]} /><meshStandardMaterial color="#cbd5e1" metalness={0.8} /></mesh>
    </group>
  );
}

export default function ComponentModel({ component, showLabel = true, labelPosition = [0, -2.7, 0] }) {
  return <group position={[0, 0, 0]} rotation={component.modelRotation || [0, 0, 0]}><group scale={component.modelScale || 1}><FallbackModel id={component.id} color={component.color} /></group>{showLabel && <Html position={labelPosition} center><div className="three-label active" style={{ borderColor: component.color }}>{component.name.toUpperCase()}</div></Html>}</group>;
}
