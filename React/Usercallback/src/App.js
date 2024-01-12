import React, { useState } from "react";
import Todos from "./Components/Todos";

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <Todos todos={todos.slice()} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}> + </button>
      </div>
    </div>
  );
}
