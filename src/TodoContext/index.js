import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: toDos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    const totalToDos = toDos.length;
    const completedToDos = toDos.filter(toDo => !!toDo.completed).length;

    const searchedToDos = toDos.filter(todo =>
        todo.text
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase())
    );

    const addToDo = (text) => {
        const newToDos = [...toDos];
        newToDos.push({
            text,
            completed: false,
        });
        saveTodos(newToDos);
    }

    const completeToDo = (text) => {
        const newToDos = [...toDos];
        const todoIndex = newToDos.findIndex(todo => todo.text === text);
        newToDos[todoIndex].completed ^= true; // Alterna entre true/false
        saveTodos(newToDos);
    }

    const deleteToDo = (text) => {
        const newToDos = [...toDos];
        const todoIndex = newToDos.findIndex(todo => todo.text === text);
        newToDos.splice(todoIndex, 1);
        saveTodos(newToDos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
            openModal,
            setOpenModal,
            addToDo,
        }}>
            {children}
        </TodoContext.Provider >
    );
}

export { TodoContext, TodoProvider };
