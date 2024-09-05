import React from 'react'
import { useState } from 'react'

export const TaskChallenge = () => {

    const [tareas, setTareas] = useState([])
    const [entrada, setEntrada] = useState('')


    const obtenerCampo = (evt) => {
        setEntrada(evt.target.value)
        console.log(entrada)
    }

    const ingresarTarea = () => {
        setTareas([...tareas, entrada])
        setEntrada('')
    }

  return (
    <>
        <h1>Lista de Tareas</h1>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
            <button class="btn btn-success" type="button" onClick={() => ingresarTarea()}>Agregar Tarea</button>
        </div>
        <input type="text" class="form-control" placeholder="Ingrese La Tarea" name='entrada' value={entrada} onChange={obtenerCampo}></input>
        </div>

        {tareas.map((tarea, index) => (
        
            <li key={index}>{tarea}</li>
            
        ))}
    </>
  )
}