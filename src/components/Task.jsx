import React from 'react'
import '../estilos/Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Task = ({id, text, deleteTask}) => {
  return (
  <>
    <div className='task-container'>
      <div className='task-text'>
        {text}
      </div>
      <div className='icon-container'>
        <div className='icon' onClick={() => deleteTask(id)}>
          <AiOutlineCloseCircle className='icon'/>
        </div>
      </div>  
    </div>
  </>
  )
}
