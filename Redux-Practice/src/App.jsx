import { BrowserRouter, Route, Routes } from "react-router";
import { TodoPage } from "./pages/TodoPage";
import { SingleTodo } from "./pages/SingleTodo";

export const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route path="" Component={TodoPage} />
                <Route path=":todo_id" Component={SingleTodo} />
            </Route>
        </Routes>
    </BrowserRouter>
};