import { BrowserRouter, Routes, Route } from "react-router";
import { Props } from "./components/Props";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NotificationPage } from "./pages/NotificationPage";
import { PaymentPage } from "./pages/PaymentPage";
import { PageA } from "./pages/PageA";
import { PageB } from "./pages/PageB";
import { createContext } from "react";

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

export const Context = createContext();

// Nested Routing
export const App = () => {
    return <Context.Provider value={10}>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="" Component={HomePage} />
                    <Route path="about" Component={AboutPage} />
                    <Route path="settings">
                        <Route path="notification" Component={NotificationPage} />
                        <Route path="payment" Component={PaymentPage} />
                    </Route>
                    <Route path="page-a" Component={PageA} />
                    <Route path="page-b" Component={PageB} />
                </Route>
                <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
        </BrowserRouter>
    </Context.Provider>
}