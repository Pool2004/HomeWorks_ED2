import PokemonComponent from './components/PokemonComponent';
import TodoComponent from './components/TodoComponent';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Imagen de fondo */}
      <img className="background-image" src="../public/fondoImagen.png" alt="Fondo principal" />
      
      {/* Contenido de la app */}
      <div className="content-container">
        <header>
          <h1>Made by: Jean | Parcial Redux </h1>
        </header>
        <main>
          <div className="components-container">
            <section className="component-section">
              <PokemonComponent />
            </section>
            <section className="component-section">
              <TodoComponent />
            </section>
          </div>
        </main>
        <footer>
          <img src="../public/elcomandante.png" alt="El Comandante" />
        </footer>
      </div>
    </div>
  );
}

export default App;
