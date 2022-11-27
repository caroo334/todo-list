import React from "react";
import '../styles/CreateTodoButton.css';

export const CreateTodoButton = (props) => {

    return (
        <button className="CreateTodoButton"
        onClick={() => console.log('click')}>
            +
        </button>
    )
}