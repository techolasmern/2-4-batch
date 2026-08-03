import { createRoot } from "react-dom/client";
import "./main.css";
import { App } from "./App";

const rootContainer = document.getElementById("root");

const root = createRoot(rootContainer);

root.render(<App />);