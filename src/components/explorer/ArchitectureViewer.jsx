import { useEffect, useRef, useState } from "react";
import ArchitectureScene from "../../three/scene/ArchitectureScene.jsx";
import ControlToolbar from "./ControlToolbar.jsx";
import ViewerTip from "./ViewerTip.jsx";
import Hotspot from "./Hotspot.jsx";
import StructuralDiagram from "./StructuralDiagram.jsx";
import { getComponent } from "../../data/architectureData.js";
import useViewer from "../../hooks/useViewer.js";
import useArchitecture from "../../hooks/useArchitecture.js";

export default function ArchitectureViewer({ selected, onSelect }) {
  const controlsRef = useRef();
  const { t } = useArchitecture();
  const { isolated, setIsolated, dataFlow, setDataFlow, layers, setLayers } = useViewer();
  const [layersOpen, setLayersOpen] = useState(false);
  const [viewMode, setViewMode] = useState("3d");
  const [selectedPart, setSelectedPart] = useState(null);
  const item = getComponent(selected);
  const activePart = item.media.parts.find((part) => part.id === selectedPart);

  useEffect(() => {
    setSelectedPart(null);
  }, [selected]);

  function reset() {
    controlsRef.current?.reset();
    setIsolated(null);
    setDataFlow(false);
  }

  function isolate() {
    setIsolated((value) => value === selected ? null : selected);
  }

  function zoomIn() {
    const c = controlsRef.current;
    if (c?.object) c.object.position.multiplyScalar(0.88);
  }

  return (
    <main className="viewer-panel">
      <ControlToolbar
        onReset={reset}
        onIsolate={isolate}
        onLayers={() => setLayersOpen((v) => !v)}
        onFlow={() => setDataFlow((v) => !v)}
        onZoom={zoomIn}
      />
      {layersOpen && (
        <div className="layers-popup">
          <h4>ARCHITECTURE LAYERS</h4>
          {Object.entries(layers).map(([key, value]) => (
            <label className="layer-option" key={key}>
              <input type="checkbox" checked={value} onChange={() => setLayers((prev) => ({...prev, [key]: !prev[key]}))}/>
              {key[0].toUpperCase() + key.slice(1)}
            </label>
          ))}
        </div>
      )}
      <ViewerTip />
      <div className="canvas-container">
        {viewMode === "3d" ? <ArchitectureScene selected={selected} onSelect={onSelect} isolated={isolated} layers={layers} dataFlow={dataFlow} controlsRef={controlsRef} /> : (
          <section className="image-viewer" aria-label={`${item.name} architecture image viewer`}>
            <div className="image-viewer-heading"><span>{t.componentView}</span><strong>{activePart?.name || item.name}</strong></div>
            <div className="component-image-wrap">
              <StructuralDiagram component={item} parts={item.media.parts} />
              {item.media.parts.map((part) => <Hotspot key={part.id} position={part.position} label={part.name} color={item.color} onClick={() => setSelectedPart(part.id)} />)}
            </div>
            <div className="image-viewer-caption">{activePart ? <button type="button" onClick={() => setSelectedPart(null)}>{t.backOverview}</button> : t.pointMarker}</div>
          </section>
        )}
      </div>
      <div className="viewer-mode-switch" role="group" aria-label="Viewer mode">
        <button type="button" className={viewMode === "3d" ? "active" : ""} onClick={() => setViewMode("3d")}>3D scene</button>
        <button type="button" className={viewMode === "image" ? "active" : ""} onClick={() => setViewMode("image")}>Image view</button>
      </div>
      <div className="viewer-footer">{t.threeFooter}</div>
    </main>
  );
}
