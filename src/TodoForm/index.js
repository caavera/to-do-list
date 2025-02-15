import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';
import Swal from 'sweetalert2';

function TodoForm() {
    const {
        addToDo,
        setOpenModal
    } = React.useContext(TodoContext);
    
    const [newToDoValue, setNewToDoValue] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newToDoValue.trim().length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puedes agregar un To-Do vacío!',
                confirmButtonColor: '#ff4d4d',
            });
            return;
        }
        addToDo(newToDoValue);
        setOpenModal(false);
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
