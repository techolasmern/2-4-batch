import { BrowserRouter, Routes, Route } from "react-router";
import { Props } from "./Props";

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/hi" element={<h1>Hi</h1>} />
            <Route path="/hello" element={<h1>Hello</h1>} />
            {/* <Route path="/props" element={<Props />} /> */}
            <Route path="/props" Component={Props} />
        </Routes>
    </BrowserRouter>
}