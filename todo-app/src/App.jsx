import { useState } from "react";
import { TodoList } from "./components/TodoList";

export const App = () => {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleAddTodo = () => {
        const task = todo.trim();
        if (task == "") {
            return alert("Todo is empty");
        }
        const uid = crypto.randomUUID();
        const addedDate = new Date().toLocaleString("en-IN");
        const todoObj = {
            task_id: uid,
            title: task,
            status: "pending",
            created_at: addedDate
        }
        setTodo("");
        return setTodoList((prevTodoList) => {
            return [todoObj, ...prevTodoList];
        })
    }

    const handleDelete = (task_id) => {
        setTodoList((prevTodoList) => {
            return prevTodoList.filter((todo) => todo.task_id != task_id);
        })
    }

    const handleCompleted = (task_id) => {
        setTodoList((prevTodoList) => {
            return prevTodoList.map((todo) => {
                if (todo.task_id == task_id) {
                    return { ...todo, status: "completed" };
                }
                return todo;
            })
        })
    }

    return <div>
        <h1>Todo Application</h1> 
        <div className="input-container">
            {/* controled input */}
            <input type="text" placeholder="Eg: Complete Notes" onChange={handleChange} value={todo} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <div className="todo-container">
            {
                todoList.map(single_todo => {
                    return <TodoList
                        key={single_todo.task_id}
                        single_todo={single_todo}
                        handleCompleted={handleCompleted}
                        handleDelete={handleDelete}
                    />
                })
            }
        </div>
    </div>
}