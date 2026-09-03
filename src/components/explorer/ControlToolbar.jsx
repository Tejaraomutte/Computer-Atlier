import { RotateCcw, EyeOff, Layers, Activity, ZoomIn } from "lucide-react";

export default function ControlToolbar({ onReset, onIsolate, onLayers, onFlow, onZoom }) {
  const controls = [
    ["Reset", RotateCcw, onReset],
    ["Isolate", EyeOff, onIsolate],
    ["Layers", Layers, onLayers],
    ["Data Flow", Activity, onFlow],
    ["Zoom", ZoomIn, onZoom]
  ];

  return (
    <div className="viewer-toolbar">
      {controls.map(([label, Icon, action]) => (
        <button key={label} className="toolbar-button" onClick={action}>
          <Icon size={18} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
