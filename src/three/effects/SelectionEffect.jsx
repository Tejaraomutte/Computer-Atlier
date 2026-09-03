export default function SelectionEffect({ active = false }) {
  return active ? <div className="selection-effect" /> : null;
}
