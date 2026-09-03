export default function GlowEffect({ color = "#8b5cf6" }) {
  return <div className="glow-effect" style={{ boxShadow: `0 0 80px ${color}` }} />;
}
