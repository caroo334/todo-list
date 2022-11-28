import "./styles/Home.css";
import React from "react";
import { HomeUI } from "./HomeUI";
import { TodoProvider } from "./TodoContext/index";

function Home() {
  return (
    <TodoProvider>
      <HomeUI />
    </TodoProvider>
  );
}

export default Home;
