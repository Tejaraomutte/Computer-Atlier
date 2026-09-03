import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function DataParticle({ enabled }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current || !enabled) return;
    const points = [[0,2.6,0],[-3,0.8,0],[0,0.8,0],[3,0.8,0],[0,-1.3,0],[0,-3.1,0]];
    const progress = (state.clock.elapsedTime % 5) / 5;
    const segment = progress * (points.length - 1);
    const index = Math.min(Math.floor(segment), points.length - 2);
    const t = segment - index;
    const a = points[index], b = points[index + 1];
    ref.current.position.set(a[0] + (b[0]-a[0])*t, a[1] + (b[1]-a[1])*t, a[2] + (b[2]-a[2])*t);
  });
  if (!enabled) return null;
  return <mesh ref={ref}><sphereGeometry args={[0.16,20,20]}/><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={4}/></mesh>;
}
