import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Iconos para el botón
import './ThemeToggle.css'; // Importamos los estilos

function ThemeToggle() {
  // Cargar el estado del modo oscuro desde localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode); // Guardar en localStorage
      return newMode;
    });
  };

  return (
    <button onClick={toggleDarkMode} className="theme-toggle">
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export {ThemeToggle};