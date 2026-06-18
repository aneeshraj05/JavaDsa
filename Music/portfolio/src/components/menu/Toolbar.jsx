import { Coffee, BrushCleaning, Pencil } from "lucide-react";
import "./tool.css";
import "../../index.css";
export default function Toolbar({ mode, setMode }) {
  return (
    <div className="toolbar">
     <button
  className={`tool ${mode === "coffee" ? "active" : ""}`}
  data-tooltip="Coffee Mode"
  onClick={() => setMode("coffee")}
>
  <Coffee size={20} />
</button>

<button
  className={`tool ${mode === "clean" ? "active" : ""}`}
  data-tooltip="Clean Mode"
  onClick={() => setMode("clean")}
>
  <BrushCleaning size={20} />
</button>

<button
  className={`tool ${mode === "chaos" ? "active" : ""}`}
  data-tooltip="Chaos Mode"
  onClick={() => setMode("chaos")}
>
  <Pencil size={20} />
</button>
    </div>
  );
}