export default function IsolateController({ isolated, setIsolated, selected }) {
  return <button onClick={() => setIsolated(isolated === selected ? null : selected)}>{isolated === selected ? "Show all" : "Isolate"}</button>;
}
