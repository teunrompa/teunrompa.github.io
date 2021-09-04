import React, { useState, useEffect } from "react";
import Form from "./components/Form.js";
import ToDoList from "./components/ToDoList.js";

function App() {
//test  
    //states
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setfilteredTodos] = useState([]);

    //run once
    useEffect(() => {
        getLocalTodos();
    }, []);

    //functions
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setfilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case "uncompleted":
                setfilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setfilteredTodos(todos);
                break;
        }
    }

       //use effect
    useEffect(() => {
        filterHandler(); 
        saveLocalTodos();
    }, [todos, status])

    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]));
        }else{
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    }

    return (
        <div className="App">
            <header>
                <div className="head">
                    <h1>My To Do List</h1>
                </div>
                <div>
                    <Form
                        inputText={inputText}
                        todos={todos}
                        setTodos={setTodos}
                        setInputText={setInputText}
                        setStatus={setStatus}
                    />
                </div>
                <div>
                    <ToDoList
                        setTodos={setTodos}
                        todos={todos}
                        filteredTodos={filteredTodos}
                    />
                </div>
            </header>
        </div>
    )
}

export default App;