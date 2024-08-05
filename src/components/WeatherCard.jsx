// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';

// const WeatherCard = ({ weather }) => {
//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">{weather.name}</Typography>
//         <Typography variant="h6">{weather.weather[0].description}</Typography>
//         <Typography variant="body1">Temp: {weather.main.temp}°C</Typography>
//         <Typography variant="body1">Humidity: {weather.main.humidity}%</Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default WeatherCard;





// src/components/WeatherCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  return (
    <Card className="weather-card">
      <CardContent>
        <Typography className="weather-title" variant="h5">
          {weather.name}
        </Typography>
        <Typography className="weather-description" variant="h6">
          {weather.weather[0].description}
        </Typography>
        <Typography className="weather-temp" variant="body1">
          Temp: {weather.main.temp}°C
        </Typography>
        <Typography className="weather-humidity" variant="body1">
          Humidity: {weather.main.humidity}%
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
