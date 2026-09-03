import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo } from "../redux/todo.slice";
import { useNavigate } from "react-router";

export const TodoPage = () => {

    const { list: todos } = useSelector(state => state.todo);
    console.log(todos);
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = event => {
        const value = event.target.value;
        setTodo(value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const dateTime = new Date().toLocaleString();
        const taskObj = {
            id: crypto.randomUUID(),
            title: todo,
            status: "pending",
            createdAt: dateTime,
            updatedAt: dateTime
        }
        dispatch(createTodo(taskObj));
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleNav = (id) => {
        navigate(`/${id}`);
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={handleChange} />
            <button>Add</button>
        </form>
        <div>
            {
                todos.map(todo => {
                    return <div key={todo.id}>
                        <p>{todo.title} - <button onClick={() => handleDelete(todo.id)}>Del</button><button onClick={() => handleNav(todo.id)}>View</button></p>
                    </div>
                })
            }
        </div>
    </div>
};