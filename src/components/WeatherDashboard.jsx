// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import WeatherCard from './WeatherCard';
// import { TextField, Button, Container } from '@mui/material';

// const WeatherDashboard = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);

//   const fetchWeather = async (city) => {
//     const apiKey = `266212ee94de31a27997b74417be3fda`;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     const response = await axios.get(url);
//     setWeather(response.data);
//   };

//   const handleSearch = () => {
//     fetchWeather(city);
//   };

//   return (
//     <Container>
//       <TextField
//         label="City"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <Button onClick={handleSearch}>Search</Button>
//       {weather && <WeatherCard weather={weather} />}
//     </Container>
//   );
// };

// export default WeatherDashboard;





















// src/components/WeatherDashboard.js
import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { FaSearch } from "react-icons/fa";
import './WeatherDashboard.css';

const WeatherDashboard = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = '266212ee94de31a27997b74417be3fda';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    setWeather(response.data);
  };

  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <Container className="dashboard-container">
      <Container className=''/>  
      <Paper className="dashboard-paper">
        <Typography variant="h4" gutterBottom>
          Weather Dashboard
        </Typography>
          <div className="search-container">
        <div className="dashboard-searchBar">
            <TextField
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              variant="outlined"
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              style={{ marginLeft: '10px' }}
              >
              <FaSearch/>
            </Button>
          </div>
        {weather && <WeatherCard weather={weather} />}
        </div>
      </Paper>
    </Container>
  );
};

export default WeatherDashboard;
