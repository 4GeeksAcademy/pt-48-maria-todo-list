import React, { useState } from 'react'
import { InputTask } from './InputTask'
import '../estilos/ListTask.css'
import { Task } from './Task'

export const ListTask = () => {

    const [tasks, setTasks]= useState([]);

    const addTask = task => {
      setTasks([...tasks, task]);
    };
    const deleteTask = id => {
      setTasks(tasks.filter(task => task.id !== id));
    };

  return (
    <>
      <InputTask addTask={addTask}/>
      <div className='list-task'>
        {
          tasks.length > 0 ?
          tasks.map((task) =>
            <Task key={task.id} {...task} deleteTask={deleteTask} />
          ):
          <h3>No hay tareas, añadir tareas</h3>
        }
      </div>
    </>
  );
}
