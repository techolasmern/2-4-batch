import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./main.css";

const appContainer = document.getElementById("root");
const appRoot = createRoot(appContainer);

appRoot.render(<App />);