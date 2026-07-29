export const TodoList = ({ single_todo, handleCompleted, handleDelete }) => {
    return <div className="todo">
        <div>
            <h2>{single_todo.title}</h2>
            <p>Status: {single_todo.status}</p>
            <p>Added: {single_todo.created_at}</p>
        </div>
        <div>
            <button onClick={() => handleDelete(single_todo.task_id)}>Delete</button>
            <button onClick={() => handleCompleted(single_todo.task_id)}>Mark as Completed</button>
        </div>
    </div>
}