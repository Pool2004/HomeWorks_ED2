import React from 'react';
import useCounter from '../hooks/UseCounter';

function CounterComponent({value = 0}) {
  const { count, increment, decrement, reset } = useCounter(value); // Puedes cambiar el valor inicial

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
}

export default CounterComponent;
