import { OrbitControls } from "@react-three/drei";
export default function OrbitController({ controlsRef, enableRotate = false }) {
  return <OrbitControls ref={controlsRef} makeDefault target={[0, 0, 0]} enableRotate={enableRotate} enableZoom enablePan enableDamping dampingFactor={0.08} minDistance={3} maxDistance={24} />;
}
