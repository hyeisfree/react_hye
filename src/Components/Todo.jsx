import React from "react";

const TodoForm = ({ toDo, onChange, onSubmit, onDelete, onClick }) => {
  return (
    <form>
      <input
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="Write your to do..."
      />
      <button onClick={onSubmit}>Add To Do</button>
      <button onClick={onDelete}>Remove</button>
    </form>
  );
};

const TodoList = ({ toDos }) => {
  return (
    <ul>
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export { TodoForm, TodoList };
