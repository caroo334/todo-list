import React, { useContext } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoContext } from "./TodoContext";
import { Modal } from "./Modal";
import { TodoForm } from "./components/TodoForm";

export const HomeUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    SetOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <p>LOADING ...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primera tarea</p>}
        {error && <p>Desesperate, hubo un error...</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} />
        </Modal>
      )}
      <CreateTodoButton SetOpenModal={SetOpenModal} openModal={openModal} />
    </>
  );
};
