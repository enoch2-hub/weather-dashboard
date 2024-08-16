import React from 'react';
import { useState } from 'react';
import WeatherDashboard from './components/WeatherDashboard';

import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div>
      {/* <WeatherDashboard /> */}

      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleDarkMode} className="toggle-button">
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <WeatherDashboard />
    </div>


    </div>
  );
}

export default App;
