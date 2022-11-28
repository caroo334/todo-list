import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "../styles/TodoForm.css";

export const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTodoValue.length <= 0) return;
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="textarea">Escribe Tu nueva Tarea</label>
      <textarea
        id="textarea"
        name="textarea"
        placeholder="Agregar Tarea.."
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add ">
          Añadir
        </button>
      </div>
    </form>
  );
};
