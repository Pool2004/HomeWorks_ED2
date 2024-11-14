import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (pokemonId, { getState }) => {
    const { pokemon } = getState(); 
    if (pokemon.cache[pokemonId]) {
      return pokemon.cache[pokemonId];
    }
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return response.data; 
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
    cache: {}, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = 'loading'; 
        state.error = null;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = 'succeeded'; 
        state.data = action.payload; 
        state.cache[action.payload.id] = action.payload; 
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.status = 'failed'; 
        state.error = action.error.message; 
      });
  },
});

export default pokemonSlice.reducer;
