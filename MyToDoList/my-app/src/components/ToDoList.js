import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos , filteredTodos}) => {
console.log(filteredTodos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <ToDo
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        todo={todo} 
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;