export default function Lighting() {
  return <>
    <ambientLight intensity={1.15} />
    <directionalLight position={[6,10,7]} intensity={2.8} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
    <directionalLight position={[-7,4,5]} intensity={1.4} color="#d9f2ff" />
    <pointLight position={[-5,3,4]} intensity={1.2} color="#fff4df" />
  </>;
}
