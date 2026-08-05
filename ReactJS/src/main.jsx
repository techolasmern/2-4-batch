import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import "./main.css";
import { App } from "./App";
import { SampleProvider } from "./Providers/SampleProvider";
import { CartProvider } from './Providers/CartProvider';

const rootContainer = document.getElementById("root");

const root = createRoot(rootContainer);

root.render(<SampleProvider>
    <CartProvider>
        <App />
    </CartProvider>
</SampleProvider>);