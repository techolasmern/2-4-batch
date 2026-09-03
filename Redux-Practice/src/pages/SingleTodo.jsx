import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const SingleTodo = () => {
    const { todo_id } = useParams();
    const { list } = useSelector(state => state.todo);

    const todo = list.find(todo => todo.id == todo_id);

    return <div>SingleTodo: {todo.title}</div>
};