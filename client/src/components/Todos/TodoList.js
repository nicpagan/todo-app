import React from "react";
import Todo from './Todo'

function TodoList({ todos, deleteHandler, updateHandler }) {
    return(
        
        <div>
            <div className="d-flex flex-column justify-content-center">
            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} deleteHandler={deleteHandler} updateHandler={updateHandler} />
            })}
            </div>
        </div>
        
        
    )
}

export default TodoList;