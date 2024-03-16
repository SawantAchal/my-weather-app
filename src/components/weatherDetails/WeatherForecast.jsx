import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';


// Styled components for weather container and weather box
const WeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const WeatherBox = styled.div`
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid gray; 
  border-color:gray;
  padding: 20px;
  margin: 10px;
`;


// WeatherForecast component
const WeatherForecast = ({ forecastData }) => {
   // If forecast data is not available, return null
    if (!forecastData) return null;
  return (
    <WeatherContainer>
      {/* Map through forecastData array */}
      {forecastData.map((dayData, index) => (
        <WeatherBox key={index}>
           {/* Display day of the week */}
        <Typography variant="subtitle1">{new Date(dayData.datetime).toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 3)}</Typography>
         {/* Display day and month */}
        <Typography variant="subtitle1">{new Date(dayData.datetime).toLocaleDateString('en-US', { day: '2-digit' , month: '2-digit',})}</Typography>
          {/* Display temperature */}
        <Typography variant="body1">{dayData.temp}°C</Typography>
          {/* Uncomment below to display weather description */}
        {/* <Typography variant="body1">{dayData.weather.description}</Typography> */}
    </WeatherBox>
      ))}
    </WeatherContainer>
  )
}

export default WeatherForecast






// import React from 'react';
// import { Typography } from '@mui/material';
// import styled from 'styled-components';

// const WeatherContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
// `;

// const WeatherBox = styled.div`
//   background-color: transparent;
//   border-radius: 10px;
//   border: 2px solid gray; 
//   border-color: gray;
//   padding: 20px;
//   margin: 10px;
// `;

// const WeatherIcon = styled.img`
//   width: 50px; /* Adjust the width as needed */
//   height: auto; /* Maintain aspect ratio */
// `;

// const getWeatherIcon = (description) => {
//   switch(description.toLowerCase()) {
//     case 'rainy':
//       return 'https://tse3.mm.bing.net/th?id=OIP.W2r32nJQz7HjymOGIHqmrQHaHW&pid=Api&P=0&h=180';
//     case 'sunny':
//       return 'https://tse2.mm.bing.net/th?id=OIP.0OqtSn7BcN8r__X4aYkgcgHaFQ&pid=Api&P=0&h=180';
//     default:
//       return 'default-icon-url';
//   }
// };

// const WeatherForecast = ({ forecastData }) => {
//   if (!forecastData || forecastData.length === 0) return null;
  
//   return (
//     <WeatherContainer>
//       {forecastData.map((dayData, index) => (
//         <WeatherBox key={index}>
//           <Typography variant="subtitle1">{new Date(dayData.datetime).toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 3)}</Typography>
//           <Typography variant="subtitle1">{new Date(dayData.datetime).toLocaleDateString('en-US', { day: '2-digit' , month: '2-digit',})}</Typography>
//           <Typography variant="body1">{dayData.temp}°C</Typography>
//           {dayData.weather && dayData.weather.description &&
//             <WeatherIcon src={getWeatherIcon(dayData.weather.description)} alt={dayData.weather.description} />
//           }
//           <Typography variant="body1">{dayData.weather.description}</Typography>
//         </WeatherBox>
//       ))}
//     </WeatherContainer>
//   );
// }

// export default WeatherForecast;
