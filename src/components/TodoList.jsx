import React from "react";
import '../styles/TodoList.css'

export const TodoList = (props) => {
    return(
        <>
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
        </>
    )
}