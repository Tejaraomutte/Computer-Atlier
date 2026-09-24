export default function Hotspot({
  position = [0, 0],
  label,
  color = "#22d3ee",
  isActive = false,
  onClick,
  onMouseEnter,
  onMouseLeave
}) {
  return (
    <button
      type="button"
      className={`hotspot ${isActive ? "active" : ""}`}
      style={{ left: `${position[0]}%`, top: `${position[1]}%`, "--hotspot-color": color }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-label={`Inspect ${label}`}
    >
      <span className="hotspot-core-dot" />
    </button>
  );
}
