import React, { useState } from 'react'


export const Challenge = ({value}) => {
    const [valor, setValor] = useState(value)

    const handleAdd = () => {

        setValor(valor + 1)
    }

    const handleSubstract = () => {
        setValor(valor - 1)
    }

    const handleReset = () => {

        setValor(value)

    }
  return (
    <>
    
        <h1>Contador: {valor}</h1>
        <button className='btn btn-success' onClick={() => handleAdd()}>+1</button>
        <button className='btn btn-secondary' onClick={() => handleReset()}>Reset</button>
        <button className='btn btn-danger' onClick={() => handleSubstract()}>-1</button>
    
    </>
  )
}