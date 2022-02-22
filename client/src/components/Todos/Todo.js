import React, { useState } from "react";

// Edit and Update 'todo' 
function Todo({ todo, deleteHandler, updateHandler}) {

    const [isEditing, setIsEditing] = useState(false);
    const [updatedTodo, setUpdatedTodo] = useState();

    const updateTodoState = (e) => {
        // update the state with the value entered in the input
        setUpdatedTodo({
            id: todo.id,
            message: e.target.value
        })
    }

    const updateAndReset = (input, e) => {
        e.preventDefault();
        // call updateHandler with input
        updateHandler(input);
        setIsEditing(false);

    }

    return (
        <div className="list-group-item">
            {isEditing ? 
                <form onSubmit={e => updateAndReset(updatedTodo, e)}>
                    <div>
                    <input 
                        type="text"
                        defaultValue={todo.message}
                        onChange={updateTodoState}
                    /> 
                    </div>
                </form>
                : 
                <p onDoubleClick={() => setIsEditing(true)}>{todo.message}</p>
            }
            <div>
                <button className="btn btn-sm btn-danger" onClick={() => deleteHandler(todo.id)}>Complete</button>
            </div>
        </div>
    )
}

export default Todo;