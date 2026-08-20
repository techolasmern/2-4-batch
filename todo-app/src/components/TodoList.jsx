import { Fragment, useState } from "react"

export const TodoList = ({ single_todo, handleCompleted, handleTodoUpdate, handleDelete, handleEdit, editTodo }) => {
    
    const [editedText, setEditedText] = useState("");
    
    return <div className="todo">
        <div>
            <h2>{(editTodo && editTodo.task_id == single_todo.task_id) ? <Fragment>
                <input type="text" name="edit_todo" onChange={(e) => {
                    setEditedText(e.target.value);
                }} value={editedText} /> <button onClick={() => handleTodoUpdate({...single_todo, title: editedText})}>Update</button>
            </Fragment> : single_todo.title}</h2>
            <p>Status: {single_todo.status}</p>
            <p>Added: {single_todo.created_at}</p>
        </div>
        <div>
            <button onClick={() => handleDelete(single_todo.task_id)}>Delete</button>
            <button onClick={() => handleCompleted(single_todo.task_id)}>Mark as Completed</button>
            <button onClick={() => handleEdit(single_todo.task_id)}>Edit</button>
        </div>
    </div>
}