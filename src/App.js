import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Picar tomate', completed: true},
  {text: 'Picar Ajo', completed: false},
  {text: 'Mezclar ingredientes', completed: false},
  {text: '🎉 ¡pendiente! Completar todas y cada una de tus tareas. 🎉', completed: false},
];

function App() {
  const [toDos, setToDos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const totalToDos = toDos.length;
  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;

  const searchedToDos = toDos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

  const completeToDo = (text) => {
    const newToDos = [...toDos];
    const todoIndex = newToDos.findIndex(todo => todo.text === text);
    newToDos[todoIndex].completed = true;
    setToDos(newToDos);
  }

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const todoIndex = newToDos.findIndex(todo => todo.text === text);
    newToDos.splice(todoIndex, 1);
    setToDos(newToDos);
  }

  return (
    <React.Fragment>
      <ThemeToggle />
      <TodoCounter completed={completedToDos} total={totalToDos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedToDos.map( todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeToDo(todo.text)}
            onDelete={() => deleteToDo(todo.text)}
          />
        ))}
      </TodoList>

        <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
