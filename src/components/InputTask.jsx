import React, { useState } from 'react'
import '../estilos/InputTask.css'

let nextId = 0;

export const InputTask = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTask({ id: nextId++, text: inputValue });
    setInputValue('');
  };
  
  return (
    <>
      <form className='head-form' onSubmit={handleSubmit}>
        <input
        className='task-input'
          type='text'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder='Escribe tu tarea'
          required
        ></input>
      </form>  
    </>
  )
}
