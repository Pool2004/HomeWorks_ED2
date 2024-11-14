import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../features/pokemon/pokemonSlice';
import './PokemonComponent.css';

const PokemonComponent = () => {
  const [pokemonId, setPokemonId] = useState(1); // Comienza con el ID 1
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon.data);
  const status = useSelector((state) => state.pokemon.status);
  const error = useSelector((state) => state.pokemon.error);

  const handleNextPokemon = () => {
    dispatch(fetchPokemon(pokemonId)); // Busca el Pokémon por ID
    setPokemonId((prevId) => prevId + 1); // Incrementa el ID para el próximo clic
  };

  return (
    <div className="pokemon-container">
      <h2>Find a Pokemon by ID!</h2>
      <button onClick={handleNextPokemon}>Next Pokémon</button>

      {status === 'loading' && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {pokemon && status === 'succeeded' && (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};

export default PokemonComponent;
