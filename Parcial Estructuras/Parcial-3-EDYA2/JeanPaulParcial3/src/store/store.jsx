import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemon/pokemonSlice';
import todosReducer from '../features/todos/todosSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    todos: todosReducer,
  },
});

export default store;
