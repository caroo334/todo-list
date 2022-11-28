import React from "react";
import "../styles/CreateTodoButton.css";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";

export const CreateTodoButton = (props) => {
  const { openModal, setOpenModal } = useContext(TodoContext);

  const handleClick = () => {
    if (openModal) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  };
  return (
    <button className="CreateTodoButton" onClick={() => handleClick()}>
      +
    </button>
  );
};
