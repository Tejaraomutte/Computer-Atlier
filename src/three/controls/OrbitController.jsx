import { OrbitControls } from "@react-three/drei";
export default function OrbitController({ controlsRef }) {
  return <OrbitControls ref={controlsRef} makeDefault target={[0, 0, 0]} enableRotate enableZoom enablePan enableDamping dampingFactor={0.08} minDistance={3} maxDistance={24} />;
}
