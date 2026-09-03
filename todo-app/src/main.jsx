import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./main.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const appContainer = document.getElementById("root");
const appRoot = createRoot(appContainer);

appRoot.render(<Provider store={store}>
    <App />
</Provider>);