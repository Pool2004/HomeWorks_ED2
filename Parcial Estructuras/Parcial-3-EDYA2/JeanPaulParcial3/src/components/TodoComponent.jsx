import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../features/todos/todosSlice';
import './TodoComponent.css';

const TodoComponent = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text }));
      setText('');
    }
  };

  return (
    <div className="todo-container">
      <h2>ToDO List</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribir aquí para agregar una tarea..."
      />
      <button onClick={handleAddTodo}>Agregar Tarea</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Borrar Tarea</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
