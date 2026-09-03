import { useState } from "react";
import ArchitectureLibrary from "../components/explorer/ArchitectureLibrary.jsx";
import ArchitectureViewer from "../components/explorer/ArchitectureViewer.jsx";
import InfoPanel from "../components/information/InfoPanel.jsx";
import { useArchitectureContext } from "../context/ArchitectureContext.jsx";
import { architectureComponents } from "../data/architectureData.js";

export default function Explorer() {
  const { selected, setSelected } = useArchitectureContext();
  const [message, setMessage] = useState("");
  const item = architectureComponents.find((x) => x.id === selected);

  function animate() {
    setMessage(`${item?.shortName || "Component"} animation is ready.`);
    setTimeout(() => setMessage(""), 2200);
  }

  return (
    <main className="explorer-layout">
      {message && <div className="toast">{message}</div>}
      <ArchitectureLibrary selected={selected} onSelect={setSelected}/>
      <ArchitectureViewer selected={selected} onSelect={setSelected}/>
      <InfoPanel selected={selected} onAnimate={animate}/>
    </main>
  );
}
