import { BrowserRouter, Routes, Route } from "react-router";
import { StorePage } from "./pages/StorePage";
import { ViewSingleProduct } from "./pages/ViewSingleProduct";

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={StorePage} />
                <Route path="view">
                    <Route path=":product_id" Component={ViewSingleProduct} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
};