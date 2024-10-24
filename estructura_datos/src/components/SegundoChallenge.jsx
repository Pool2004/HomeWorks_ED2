import React from 'react'
import { useState } from 'react'


export const SegundoChallenge = ({valorLlegada = 0}) => {
  // Inicializa el valor con 0 o cualquier valor inicial
  const [valor, setValor] = useState(valorLlegada);

  // Función para incrementar el valor
  const incrementarValor = () => {
    setValor(valor + 1);
  }

  const disminuirValor = () => {
    setValor(valor - 1);
  }

  const resetearValor = () => {
    setValor(0);
  }
  return (
    <>
      <h1>Counter: {valor}</h1>
      {/* No invoques la función directamente, solo pasa la referencia */}
      <button onClick={incrementarValor}>Incrementar +1</button>
      <button onClick={disminuirValor}>Incrementar -1</button>
      <button onClick={resetearValor}>Reset</button>
    </>
  )
}