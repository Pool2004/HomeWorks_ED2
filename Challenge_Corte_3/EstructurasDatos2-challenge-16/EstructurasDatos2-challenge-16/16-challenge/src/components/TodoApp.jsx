import React from 'react';
import { useTodo } from '../hooks/useTodo';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    countTodos,
    countPendingTodos
  } = useTodo();

  return (
    <>
      <h1>
        Lista Tareas:
        <br />
        
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}/>
        </div>
        <small> Pendientes: {countPendingTodos()} </small>{" "}
        <br />
        <small> Completadas: {countTodos() - countPendingTodos()} </small>{" "}

        <div className="col-5">
          
          <h4> Agregar TODO </h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};