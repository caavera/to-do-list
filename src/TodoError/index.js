import React from 'react';
import './TodoError.css';
import Swal from 'sweetalert2';

function TodoError() {
    const handleReload = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Reintentando...',
            text: 'Estamos intentando recuperar los datos.',
            confirmButtonColor: '#4caf50',
        }).then(() => {
            window.location.reload();
        });
    };

    return (
        <div className="TodoError">
            <h2>❌ ¡Ups! Ocurrió un error al cargar los To-Dos.</h2>
            <p>Intenta recargar la página o verifica tu almacenamiento local.</p>
            <button onClick={handleReload} className="TodoError-retry">Reintentar</button>
        </div>
    );
}

export { TodoError };
