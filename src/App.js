import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import { TodoList } from "./components/TodoList";

const KEY = "todoApp.todos";

export function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1", completed: false },
  ]);

  const todoTaskRef = useRef();

  /*Extrae del localstorage las tareas antes de refrescar */
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  /*Guarda en el localstorage las tareas que se van añadiendo al array todos */
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  /*Cambia el estado del campo completed si el input-checkbox esta presionado o no */
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  /*Agrega una tarea */
  const handleTodoAdd = (event) => {
    const task = todoTaskRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };

  /*Borra una tarea */
  const clearTask = (id) => {
    const newTodos = [...todos];
    setTodos(newTodos.filter((todo) => todo.id !== id));
  }


  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="listTasks">
          <TodoList todos={todos} toggleTodo={toggleTodo} clearTask={clearTask} />
        </div>
        <div className="formNewTaskAdd">
          <form className="form">
            <input type="text" ref={todoTaskRef} required />
            <label className="lbl-nombre">
              <span className="text-nomb">Nueva Tarea</span>
            </label>
          </form>
          <button className="btn-Add" onClick={handleTodoAdd}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg>
          </button>
        </div>
        <div className="finishTask-text">
          Te quedan {todos.filter((todo) => !todo.completed).length} tareas por
          terminar.
        </div>
      </div>
    </div>
  );
}
