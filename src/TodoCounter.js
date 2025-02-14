import './TodoCounter.css';
function TodoCounter({ total, completed}){
    const message = 
        total === 0 ? '¡Agrega tu primera tarea!' :
        completed === total ? '🎉 ¡Felicidades! Completaste todas tus tareas. 🎉' :
        <>Has completado <span>{completed}</span> de <span>{total}</span> tareas.</>;
        
    return (
        <h1 className='TodoCounter'>
            {message}
        </h1>
    );
}

export { TodoCounter};