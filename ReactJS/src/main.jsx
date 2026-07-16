// import <fun/prop> from "<package>";
import { createRoot } from "react-dom/client";
import Comp from "./App"; // default import
import { Contact as Changed } from "./App"; // named import

const rootContainer = document.getElementById("root");

const root = createRoot(rootContainer);

root.render(<div>
    <Comp.About />
    <Comp.App />
    <Changed />
</div>);