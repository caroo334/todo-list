import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

//data mockeada
const todos = [
  {text: 'Cebolla', completed: false},
  {text: 'Tomate', completed: false},
  {text: 'Sandia', completed: true},
  {text: 'Manzana', completed: true},
  {text: 'Uvas', completed: false},
  {text: 'Pepinos', completed: true},

]

function App() {
  return <div className="App">
    <TodoCounter />
    <TodoSearch/>
    <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
      ))}
    </TodoList>
    <CreateTodoButton/>
  </div>;
}

export default App;
