import { createRoot } from "react-dom/client";
import PasswordGenerator from "./PasswordGenerator";

const rootContainer = document.getElementById("root");

const root = createRoot(rootContainer);

root.render(<PasswordGenerator />);