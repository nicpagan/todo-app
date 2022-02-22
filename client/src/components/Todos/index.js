import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import axios from "axios"

function Todos() {
    const [todoList, setTodoList] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:8080/todos')
        .then(res => {
            setTodoList(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteHandler  = id => {
        axios.delete(`http://localhost:8080/todos/${id}`)
            .then((res)=> {
                console.log(res)
                const newTodos = todoList.filter((element) => {
                    return element.id !== id
                })
                setTodoList(newTodos)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const updateHandler = todo => {
        axios.put(`http://localhost:8080/todos/${todo.id}`, todo)
            .then((res)=> {
                console.log(res)
                setTodoList(todoList.map(element => {
                    if(element.id === todo.id) {
                        return {
                            ...element,
                            message: todo.message
                        }
                    } else {
                        return element
                    }
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return(
        <div className="d-flex flex-column ml-5 mr-5 p-4">
            <div className="jumbotron jumbotron-fluid p-3 pt-4">
                <h1 className="display-4">Todo List</h1>
                <h4 className="lead pt-1">Add todo item in the textbox below</h4>
                <div className="d-flex justify-content-center">
                    <TodoForm todos={todoList} setTodos={setTodoList} />
                </div>
                <hr className="my-1"/>
                <p className="lead"> To edit a 'todo', double click on the text!</p>
            </div>
            <div className="todos">
                <TodoList todos={todoList} deleteHandler={deleteHandler} updateHandler={updateHandler} />
            </div>
        </div>
    )
}

export default Todos;