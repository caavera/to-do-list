import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import './App.css';


function App() {
  const [toDos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const totalToDos = toDos.length;
  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;

  const searchedToDos = toDos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  const completeToDo = (text) => {
    const newToDos = [...toDos];
    const todoIndex = newToDos.findIndex(todo => todo.text === text);
    newToDos[todoIndex].completed = true;
    saveTodos(newToDos);
  }

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const todoIndex = newToDos.findIndex(todo => todo.text === text);
    newToDos.splice(todoIndex, 1);
    saveTodos(newToDos);
  }

  return (
    <AppUI
    completedToDos = {completedToDos} 
    totalToDos = {totalToDos} 
    searchValue = {searchValue} 
    setSearchValue = {setSearchValue} 
    searchedToDos = {searchedToDos} 
    completeToDo = {completeToDo} 
    deleteToDo = {deleteToDo}
    />
  );
}

export default App;
