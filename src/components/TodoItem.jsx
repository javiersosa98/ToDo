import React, { Fragment } from 'react';

export function TodoItem({ todo, toggleTodo, clearTask }) {
    const { id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    const handleClearAll = () => {
        clearTask(id);
    };

    return (
        <Fragment>
            <div>
                <div className="wrapper">
                    <input id={task} type="checkbox" checked={completed} onChange={handleTodoClick} />
                    <label className="nameTask-label" htmlFor={task}>{task}</label>
                </div>
                <div className="conteiner-button">
                    <button className="btn-Trash" onClick={handleClearAll}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                    </button>
                </div>
            </div>
            <hr />
        </Fragment>

    );
}
