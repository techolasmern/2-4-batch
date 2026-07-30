import { createRoot } from "react-dom/client";
import "./main.css";
import { LifeCycle } from "./LifeCycle";

const rootContainer = document.getElementById("root");

const root = createRoot(rootContainer);

root.render(<LifeCycle />);