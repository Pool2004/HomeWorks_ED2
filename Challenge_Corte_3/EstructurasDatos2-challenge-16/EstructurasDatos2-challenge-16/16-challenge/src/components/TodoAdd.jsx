import { useState } from "react";

const TodoAdd = ({ onNewTodo }) => {
  const [description, setDescription] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length === 0) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo(newTodo);
    setDescription(""); // Clear the input field after adding the todo
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Tarea"
        className="form-control"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
