"use client";
import React, { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([
        { todoText: "ToDo 1", completed: false },
        { todoText: "ToDo 2", completed: true },
        { todoText: "ToDo 3", completed: true },
        { todoText: "ToDo 4", completed: false },
    ]);
    const onClickHandler = (meraELM: any) => {
        const newtodos = todos.map((todo) => {
            if (todo.todoText === meraELM.todoText) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        console.log(newtodos);
        setTodos(newtodos);
    };
    const addTodo = () => {
        const newtodo = { todoText: todo, completed: false };
        const newtodos = [...todos, newtodo];
        setTodos(newtodos);
        setTodo("");
    };
    const deleteTodo = (meratodo: any) => {
        const newtodos = todos.filter((todo) => {
            if (todo.todoText === meratodo.todoText)
                return false;
            return true;
        });
        console.log("old : ", todos, " new : ", newtodos);
        setTodos(newtodos)
    };
    return (
        <>
            <div>ToDo</div>
            <input
                placeholder="Add ToDo Here"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={addTodo}>ADD</button>
            <ul>
                {todos.map((elm) => {
                    return (
                        <li
                            style={{
                                color: elm.completed ? "blue" : "red",
                                fontStyle: elm.completed ? "oblique" : "italic",
                            }}
                            key={elm.todoText}
                        >
                            <input
                                type={"checkbox"}
                                checked={elm.completed}
                                onChange={() => onClickHandler(elm)}
                            />
                            {elm.todoText} -
                            <button onClick={() => deleteTodo(elm)}> {"  Delete "} </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
