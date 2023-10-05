import React, { useState } from "react";
import { TodoForm, TodoList } from "../Components/Todo";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    console.log("S");
  };
  const onDelete = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <TodoForm
        toDo={toDo}
        onChange={onChange}
        onSubmit={onSubmit}
        onClick={onDelete}
      />
      <hr />
      <TodoList toDos={toDos} />
    </div>
  );
}

export default App;
