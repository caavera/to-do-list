import React from 'react';
import './TodoSearch.css';

function TodoSearch(props) {

    return (
        <input placeholder='Buscar tareas'
            className='TodoSearch'
            value={props.searchValue}
            onChange={  (event) => {
                props.setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };