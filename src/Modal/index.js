import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { TodoContext } from '../TodoContext';
import { FaTimes } from 'react-icons/fa'; // 🔹 Importamos el ícono

function Modal({ children }) {
    const { setOpenModal } = React.useContext(TodoContext);

    return ReactDOM.createPortal(
        <div className="ModalBackground" onClick={() => setOpenModal(false)}>
            <div className="ModalContainer" onClick={(e) => e.stopPropagation()}>
                <button className="ModalCloseButton" onClick={() => setOpenModal(false)}>
                    <FaTimes />
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };
