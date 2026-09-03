export default function Hotspot({ position = [0, 0, 0], label, color = "#fff", onClick }) {
  return (
    <button
      type="button"
      className="hotspot"
      style={{ left: `${position[0]}%`, top: `${position[1]}%`, borderColor: color }}
      onClick={onClick}
      aria-label={`Show ${label}`}
      title={`Show ${label}`}
    />
  );
}
