export default function ResetController({ controlsRef }) {
  return <button onClick={() => controlsRef.current?.reset()}>Reset view</button>;
}
