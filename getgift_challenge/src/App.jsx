import React, { useState } from 'react';
import { GifGrid } from './components/GifGrid';
import './App.css';

function App() {
  const [input, setInput] = useState(''); // 1. Hook useState para manejar el input
  const [category, setCategory] = useState(''); // 2. Hook para manejar la categoría a buscar

  const cambiarInput = (event) => {
    event.preventDefault();
    setInput(event.target.value); // Actualiza el input a medida que se escribe
  }

  const mandarInput = (event) => {
    event.preventDefault();
    setCategory(input); // 3. Actualiza la categoría con el valor del input
  }

  return (
    <div>
      <h1>Gif App</h1>
      <input type="text" onChange={cambiarInput} />
      <button onClick={mandarInput}>Mostrar Gift 😈</button>
      
      {/* 4. Renderizar GifGrid solo si la categoría tiene valor */}
      {category && <GifGrid category={category} />} 
    </div>
  );
}

export default App;
