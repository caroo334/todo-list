import React, { useContext } from "react";
import "../styles/TodoCounter.css";
import { TodoContext } from "../TodoContext";

export const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <>
      <h2 className="todocounter-title">
        Has completado {completedTodos} de {totalTodos}
      </h2>
    </>
  );
};
