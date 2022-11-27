import "./App.css";
import React, { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

//data mockeada
const defaultTodos = [
  { text: "Cebolla", completed: false },
  { text: "Tomate", completed: false },
  { text: "Sandia", completed: true },
  { text: "Manzana", completed: true },
  { text: "Uvas", completed: false },
  { text: "Pepinos", completed: true },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  //ACA HACEMOS EL FILTRADO EN LA BARRA DE BUSQUEDA (si la barra de busqueda esta vacia mostratodo si hay algo filtra)
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true; // esto lo cambia a completado
    setTodos(newTodos);
  };

  const DeleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); // esto corta en la lista
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => DeleteTodo(todo.text)}

          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
