import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
    const {
        completedToDos,
        totalToDos
    } = React.useContext(TodoContext);
    const message = 
        totalToDos === 0 ? '¡Agrega tu primer To-Do!' :
        completedToDos === totalToDos ? '¡Has completado todos los To-Dos!' :
        <>
            Has completado <span>{completedToDos}</span> de <span>{totalToDos}</span> To-Dos
        </>;     
    return (
        <h1 className='TodoCounter'>
            {message}
        </h1>
    );
}

export { TodoCounter};