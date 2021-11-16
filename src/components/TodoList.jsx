import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, clearTask }) {

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} clearTask={clearTask} />
            ))}
        </ul>
    );
}
