import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const {
        completedToDos,
        totalToDos
    } = React.useContext(TodoContext);
    const message = 
        totalToDos === 0 ? '¡Agrega tu primera tarea!' :
        completedToDos === totalToDos ? '¡Has completado todas las tareas!' :
        <>
            Has completado <span>{completedToDos}</span> de <span>{totalToDos}</span> tareas.
        </>;     
    return (
        <h1 className='TodoCounter'>
            {message}
        </h1>
    );
}

export { TodoCounter};