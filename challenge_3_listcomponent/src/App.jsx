import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([]);  // Inicializamos la lista como un array vacío
  const [tarea, setTarea] = useState(''); // Inicializamos 'tarea' como una cadena vacía

  // Función para manejar los cambios en el input
  const setInput = (event) => {
    setTarea(event.target.value); // Actualizamos el estado con el valor del input
  }

  // Función para agregar una categoría a la lista
  const addCategory = () => {
    setList((prevList) => [...prevList, tarea]); // Agregamos la nueva categoría a la lista
    setTarea(''); // Limpiamos el campo de input después de agregar
  }

  return (
    <>
      <h1>ToDo List</h1>
      <br />
      <input 
        type="text" 
        id="categoria" 
        placeholder="Categoria" 
        value={tarea}  // Vinculamos el valor del input con el estado 'tarea'
        onChange={setInput}  // Actualizamos el valor cuando el usuario escribe
      />
      <button onClick={addCategory}>Agregar</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li> // Mostramos cada categoría en una lista
        ))}
      </ul>
    </>
  );
}

export default App;
