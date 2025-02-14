import './TodoCounter.css';
function TodoCounter({ total, completed}){
    const message = 
        total === 0 ? '¡Agrega tu primera tarea!' :
        completed === total ? '¡Has completado todas las tareas!' :
        <>Has completado <span>{completed}</span> de <span>{total}</span> tareas.</>;
        
    return (
        <h1 className='TodoCounter'>
            {message}
        </h1>
    );
}

export { TodoCounter};