import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addToDo,
        setOpenModal
    } = React.useContext(TodoContext);
    
    const [newToDoValue, setNewToDoValue] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newToDoValue.trim().length === 0) return; // Evita agregar To-Dos vacíos
        addToDo(newToDoValue);
        setOpenModal(false); // Cierra el modal después de agregar
    };

    const handleCancel = () => {
        setOpenModal(false);
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <label>Escribe tu nuevo To-Do</label>
            <textarea
                value={newToDoValue}
                onChange={(event) => setNewToDoValue(event.target.value)}
                placeholder="Ejemplo: Comprar pan"
            />
            <div className="TodoForm-buttons">
                <button type="button" className="TodoForm-cancel" onClick={handleCancel}>Cancelar</button>
                <button type="submit" className="TodoForm-submit">Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm };