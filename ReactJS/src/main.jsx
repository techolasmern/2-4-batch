import { createRoot } from "react-dom/client";
import "./main.css";
import { App } from "./App";
import { SampleProvider } from "./Providers/SampleProvider";

const rootContainer = document.getElementById("root");

const root = createRoot(rootContainer);

root.render(<SampleProvider>
    <App />
</SampleProvider>);