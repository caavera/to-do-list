import React from 'react';
import { AppUI } from './AppUI';
import './App.css';
import { TodoProvider } from '../TodoContext'; // Adjust the import path as necessary


function App() {
  

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
