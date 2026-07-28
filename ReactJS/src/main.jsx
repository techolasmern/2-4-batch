import { createRoot } from "react-dom/client";
import App from "./App";
import PasswordApp from "./PasswordApp";

const rootContainer = document.getElementById("root");

const root = createRoot(rootContainer);

root.render(<PasswordApp />);