export default function ViewerControls({ zoom, setZoom }) {
  return (
    <div className="viewer-zoom-controls">
      <button onClick={() => setZoom((z) => Math.min(z + 1, 12))}>+</button>
      <span>{zoom}</span>
      <button onClick={() => setZoom((z) => Math.max(z - 1, 4))}>−</button>
    </div>
  );
}
