import { BrowserRouter, Routes, Route, Link } from "react-router";
import { AboutPage } from "./pages/AboutPage";
import { NotificationPage } from "./pages/NotificationPage";
import { PaymentPage } from "./pages/PaymentPage";
import { PageA } from "./pages/PageA";
import { PageB } from "./pages/PageB";
import { StorePage } from "./pages/StorePage";
import { CartPage } from "./pages/CartPage";
import { DynamicRoutePage } from "./pages/DynamicRoutePage";
import { AxiosPage } from "./pages/AxiosPage";
import { FormPage } from "./pages/FormPage";
import { LoginPage } from "./pages/LoginPage";

// export const App = () => {
//     return <BrowserRouter>
//         <Routes>
//             <Route path="/hi" element={<h1>Hi</h1>} />
//             <Route path="/hello" element={<h1>Hello</h1>} />
//             {/* <Route path="/props" element={<Props />} /> */}
//             <Route path="/props" Component={Props} />

//             <Route path="/" Component={HomePage} />
//             <Route path="/about" Component={AboutPage} />

//             <Route path="/settings/notification" Component={NotificationPage} />
//             <Route path="/settings/payment" Component={PaymentPage} />
//         </Routes>
//     </BrowserRouter>
// }

// dynamic routing


// Nested Routing
export const App = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={StorePage} />
                <Route path="/signup" Component={FormPage} />
                <Route path="/login" Component={LoginPage} />
                <Route path="dynamic">
                    <Route path=":id" Component={DynamicRoutePage} />
                </Route>
                <Route path="cart" Component={CartPage} />
                <Route path="about" Component={AboutPage} />
                <Route path="settings">
                    <Route path="notification" Component={NotificationPage} />
                    <Route path="payment" Component={PaymentPage} />
                </Route>
                <Route path="axios" Component={AxiosPage} />
                <Route path="page-a" Component={PageA} />
                <Route path="page-b" Component={PageB} />
            </Route>
            <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
    </BrowserRouter>
}