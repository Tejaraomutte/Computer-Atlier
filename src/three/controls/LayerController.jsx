export default function LayerController({ layers, setLayers }) {
  return <div>{Object.keys(layers).map((key) => <label key={key}><input type="checkbox" checked={layers[key]} onChange={() => setLayers((prev) => ({...prev, [key]: !prev[key]}))}/>{key}</label>)}</div>;
}
