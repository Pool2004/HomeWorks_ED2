import React from 'react';
import useFetch from '../hooks/useFetch'; // Importa el custom hook

function FetchComponent() {
  const { data, isLoading, hasError } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (isLoading) return <p>Cargando...</p>;
  if (hasError) return <p>Error: {hasError}</p>;

  return (
    <div>
      <h1>Datos del Fetch:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default FetchComponent;
