import React, { useState } from "react";
import axios from "axios";

function TodoForm ({ todos, setTodos }) {

    const initState = ({
        id: '',
        message: ''
    });

    const [todo, setTodo] = useState(initState)

    // handling serial8 to serial4 error
    let date = Date.now();
    let shortDate = String(date).slice(4)

    const handleChange = e => {
        setTodo({
            id: shortDate,
            message: e.target.value })
    };

    const handleSubmit = e => {
        e.preventDefault()
        setTodos([ todo, ...todos ])
        axios.post('http://localhost:8080/todos', todo)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        setTodo(initState)
    }
    
    return(
    <div className="d-flex justify-content-center pb-2">
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="todo"
                value={ todo.message }
                placeholder="Enter todo item"
                onChange={handleChange}
                />
        <div>
            <button className="btn btn-success">Add Todo</button>
        </div>
        </form>
    </div>
    )
};

export default TodoForm