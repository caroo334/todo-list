import React from "react";
import '../styles/CreateTodoButton.css';

export const CreateTodoButton = (props) => {
const handleClick = (msg) => {

    alert(msg)
}
    return (
        <button className="CreateTodoButton"
        onClick={() => handleClick('Wenas')}>
            +
        </button>
    )
}