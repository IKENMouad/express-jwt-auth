import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/font-awesome/scss/font-awesome.scss";
import "./App.scss";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState({ id: "", label: "", completed: false });
  return (
    <div className="App-header">
      <TodoForm todo={todo} />
      <TodoList />
    </div>
  );
}

export default App;
