import React from "react";
import '../styles/TodoCounter.css'

export const TodoCounter = ({total, completed}) => {

    return(
        <>
        <h2 className="todocounter-title">Has completado {completed} de {total}</h2>
        </>
    )
}