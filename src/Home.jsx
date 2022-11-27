import "./styles/Home.css";
import React, { useState } from "react";
import { HomeUI } from "./HomeUI";

//data mockeada

const defaultTodos = [
  { text: "Cebolla", completed: false },
  { text: "Tomate", completed: false },
  { text: "Sandia", completed: true },
  { text: "Manzana", completed: true },
  { text: "Uvas", completed: false },
  { text: "Pepinos", completed: true },
];

function Home() {
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

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); // esto corta en la lista
    setTodos(newTodos);
  };

  return (
    <div>
      <HomeUI
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodo={completeTodo}
       deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default Home;
