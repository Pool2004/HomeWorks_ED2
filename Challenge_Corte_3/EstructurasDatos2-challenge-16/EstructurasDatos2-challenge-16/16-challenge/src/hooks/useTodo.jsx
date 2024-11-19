import { useReducer } from 'react';
import { TodoReducer } from '../components/TodoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: "Saludar!",
    done: false,
  },
  {
    id: new Date().getTime() + 1000,
    description: "Hacer el challenges :)",
    done: false,
  }
];

export const useTodo = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (newTodo) => {
    dispatchTodo({ type: 'add', payload: newTodo });
  };

  const handleDeleteTodo = (todoId) => {
    dispatchTodo({ type: 'delete', payload: todoId });
  };

  const countTodos = () => todos.length;

  const countPendingTodos = () => todos.filter(todo => !todo.done).length;

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    countTodos,
    countPendingTodos
  };
};