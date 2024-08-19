import { useState } from "react";
import AddTodo from "./addTodo";
import Todos from "./todos";

function TodoList() {
    const [selectedTodo, setSelectedTodo] = useState();

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTodo selectedTodo={selectedTodo} />
      <Todos setSelectedTodo={setSelectedTodo}/>
    </div>
  );
}

export default TodoList;