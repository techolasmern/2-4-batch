import { BrowserRouter, Route, Routes } from "react-router"
import { TodoPage } from "./pages/TodoPage"
import { ConditionalRenderingIf } from "./pages/ConditionalRendering_if"
import { ConditionalRendering } from "./pages/ConditionalRendering"
import Products from "./pages/Products"

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={TodoPage} />
                <Route path="/cr" Component={ConditionalRenderingIf} />
                <Route path="/cr-2" Component={ConditionalRendering} />
                <Route path="/products" Component={Products} />
            </Route>
        </Routes>
    </BrowserRouter>
}