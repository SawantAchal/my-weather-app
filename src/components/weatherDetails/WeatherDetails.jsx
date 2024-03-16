// import React from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import { WiHumidity, WiThermometer, WiStrongWind, WiSunrise, WiSunset } from 'react-icons/wi';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from '../../assets/bg3.jpg'

// const ContentContainer = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
  
// `;

// const WeatherContainer = styled.div`
//   display: grid;
//   gap: 20px;
//   justify-items: center;
//   max-width: 1200px;
//   margin: 0 auto;

//   @media screen and (min-width: 1024px) {
//     grid-template-columns: repeat(5, 1fr);
//   }

//   @media screen and (max-width: 1023px) {
//     grid-template-columns: repeat(4, 1fr);
//   }

//   @media screen and (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media screen and (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media screen and (max-width: 320px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;

// const WeatherBox = styled(Box)`
//   background-color: #989898;
//   border-radius: 10px;
//   padding: 20px;
//   margin: 10px;
// `;

// const Icon = styled.div`
//   font-size: 36px;
//   margin-bottom: 10px;
// `;

// const StyleButton = styled(Button)`
//   background-color: black;
//   color: white;
//   border-color:#989898;
//   border-radius: 5px;
//   padding: 10px 20px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #989898;
//     color:black;
//     border-color:black;
//   }
// `;

// const WeatherDetails = ({ weatherData }) => {
//   const { data } = weatherData;
//   const { temp, wind_spd, pres, rh, precip, sunrise, sunset, city_name, weather } = data[0];
//   const { description } = weather;
//   const navigate = useNavigate();

//   const handleButton = () => {
//     navigate('/');
//   };

//   return (

// <ContentContainer>
//       <WeatherContainer>
//         <WeatherBox>
//           <Icon><WiThermometer /></Icon>
//           <Typography variant="body1">Temperature: {temp}°C</Typography>
//         </WeatherBox>
//         <WeatherBox>
//           <Icon><WiStrongWind /></Icon>
//           <Typography variant="body1">Wind Speed: {wind_spd} m/s</Typography>
//         </WeatherBox>
//         <WeatherBox>
//           <Icon><WiHumidity /></Icon>
//           <Typography variant="body1">Humidity: {rh}%</Typography>
//         </WeatherBox>
//         <WeatherBox>
//           <Icon><WiSunrise /></Icon>
//           <Typography variant="body1">Sunrise: {sunrise}</Typography>
//         </WeatherBox>
//         <WeatherBox>
//           <Icon><WiSunset /></Icon>
//           <Typography variant="body1">Sunset: {sunset}</Typography>
//         </WeatherBox>
//         <WeatherBox>
//           <Icon><WiHumidity /></Icon>
//           <Typography variant="body1">Pressure: {pres} hPa</Typography>
//         </WeatherBox>
//         <WeatherBox>
//           <Icon><WiSunrise /></Icon>
//           <Typography variant="body1">City: {city_name}</Typography>
//         </WeatherBox>
//         <WeatherBox>
//           <Icon><WiSunset /></Icon>
//           <Typography variant="body1">Description: {description}</Typography>
//         </WeatherBox>
//         <WeatherBox>
//           <Icon><WiSunset /></Icon>
//           <Typography variant="body1">Precipitation: {precip} mm</Typography>
//         </WeatherBox>
//       </WeatherContainer>
//       <StyleButton variant="outlined" onClick={handleButton}>Search Other City</StyleButton>
//     </ContentContainer>
//   );
// };

// export default WeatherDetails;
















// import React from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import { WiHumidity, WiThermometer, WiStrongWind, WiSunrise, WiSunset } from 'react-icons/wi';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from '../../assets/bg3.jpg'

// const ContentContainer = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
  
// `;

// const WeatherContainer = styled.div`
//   display: grid;
//   gap: 20px;
//   justify-items: center;
//   max-width: 1200px;
//   margin: 0 auto;

//   @media screen and (min-width: 1024px) {
//     grid-template-columns: repeat(5, 1fr);
//   }

//   @media screen and (max-width: 1023px) {
//     grid-template-columns: repeat(4, 1fr);
//   }

//   @media screen and (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media screen and (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media screen and (max-width: 320px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;

// const WeatherBox = styled(Box)`
//   background-color: #989898;
//   border-radius: 10px;
//   padding: 20px;
//   margin: 10px;
// `;

// const Icon = styled.div`
//   font-size: 36px;
//   margin-bottom: 10px;
// `;

// const StyleButton = styled(Button)`
//   background-color: black;
//   color: white;
//   border-color:#989898;
//   border-radius: 5px;
//   padding: 10px 20px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #989898;
//     color:black;
//     border-color:black;
//   }
// `;

// const WeatherDetails = ({ weatherData }) => {
//   const { data } = weatherData;
//   const { temp, wind_spd, pres, rh, precip, sunrise, sunset, city_name, weather } = data[0];
//   const { description } = weather;
//   const navigate = useNavigate();

//   const handleButton = () => {
//     navigate('/');
//   };

//   return (

// <ContentContainer>
//       <WeatherContainer>
//         <WeatherBox>
//           <Icon><WiThermometer /></Icon>
//           <Typography variant="body1">Temperature: {temp}°C</Typography>
//         {/* </WeatherBox>
//         <WeatherBox> */}
//           <Icon><WiStrongWind /></Icon>
//           <Typography variant="body1">Wind Speed: {wind_spd} m/s</Typography>
//         {/* </WeatherBox>
//         <WeatherBox> */}
//           <Icon><WiHumidity /></Icon>
//           <Typography variant="body1">Humidity: {rh}%</Typography>
//         {/* </WeatherBox>
//         <WeatherBox> */}
//           <Icon><WiSunrise /></Icon>
//           <Typography variant="body1">Sunrise: {sunrise}</Typography>
//         {/* </WeatherBox>
//         <WeatherBox> */}
//           <Icon><WiSunset /></Icon>
//           <Typography variant="body1">Sunset: {sunset}</Typography>
//         {/* </WeatherBox>
//         <WeatherBox> */}
//           <Icon><WiHumidity /></Icon>
//           <Typography variant="body1">Pressure: {pres} hPa</Typography>
//         {/* </WeatherBox>
//         <WeatherBox> */}
//           <Icon><WiSunrise /></Icon>
//           <Typography variant="body1">City: {city_name}</Typography>
//         {/* </WeatherBox>
//         <WeatherBox> */}
//           <Icon><WiSunset /></Icon>
//           <Typography variant="body1">Description: {description}</Typography>
//         {/* </WeatherBox>
//         <WeatherBox> */}
//           <Icon><WiSunset /></Icon>
//           <Typography variant="body1">Precipitation: {precip} mm</Typography>
//         </WeatherBox>
//       </WeatherContainer>
//       <StyleButton variant="outlined" onClick={handleButton}>Search Other City</StyleButton>
//     </ContentContainer>
//   );
// };

// export default WeatherDetails;





















// import React from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import { WiHumidity, WiThermometer, WiStrongWind, WiSunrise, WiSunset } from 'react-icons/wi';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import backgroundImage from '../../assets/bg3.jpg'

// const ContentContainer = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const WeatherContainer = styled.div`
//   display: grid;
//   gap: 20px;
//   justify-items: center;
//   max-width: 1200px;
//   margin: 0 auto;

//   @media screen and (min-width: 1024px) {
//     grid-template-columns: repeat(5, 1fr);
//   }

//   @media screen and (max-width: 1023px) {
//     grid-template-columns: repeat(4, 1fr);
//   }

//   @media screen and (max-width: 768px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media screen and (max-width: 480px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media screen and (max-width: 320px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;

// const WeatherBox = styled(Box)`
//   background-color: #989898;
//   border-radius: 10px;
//   padding: 20px;
//   margin: 10px;
// `;

// const Icon = styled.div`
//   font-size: 36px;
//   margin-bottom: 10px;
// `;

// const StyleButton = styled(Button)`
//   background-color: black;
//   color: white;
//   border-color:#989898;
//   border-radius: 5px;
//   padding: 10px 20px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #989898;
//     color:black;
//     border-color:black;
//   }
// `;

// const WeatherDetails = ({ weatherData }) => {
//   const { data } = weatherData;
//   const { temp, wind_spd, pres, rh, precip, sunrise, sunset, city_name, weather } = data[0];
//   const { description } = weather;
//   const navigate = useNavigate();

//   const handleButton = () => {
//     navigate('/');
//   };

//   return (
//     <ContentContainer>
//       <WeatherContainer>
//         <WeatherBox>
//           {/* for Temperature: */}
//           <Icon><WiThermometer /></Icon>
//           <Typography variant="body1"> {temp}°C</Typography>
//           {/* for Wind Speed:  */}
//           <Icon><WiStrongWind /></Icon>
//           <Typography variant="body1">{wind_spd} m/s</Typography>
//           {/* for Humidity: */}
//           <Icon><WiHumidity /></Icon>
//           <Typography variant="body1"> {rh}%</Typography>
//           {/* for Sunrise: */}
//           <Icon><WiSunrise /></Icon>
//           <Typography variant="body1"> {sunrise}</Typography>
//           {/* for Sunset: */}
//           <Icon><WiSunset /></Icon>
//           <Typography variant="body1"> {sunset}</Typography>
//           for Pressure:
//           <Icon><WiHumidity /></Icon>
//           <Typography variant="body1"> {pres} hPa</Typography>
//           {/* for  City:*/}
//           <Icon><WiSunrise /></Icon>
//           <Typography variant="body1"> {city_name}</Typography>
//           {/* for Description: */}
//           <Icon><WiSunset /></Icon>
//           <Typography variant="body1"> {description}</Typography>
//           {/* for Precipitation: */}
//           <Icon><WiSunset /></Icon>
//           <Typography variant="body1"> {precip} mm</Typography>

//         </WeatherBox>
//       </WeatherContainer>
//       <StyleButton variant="outlined" onClick={handleButton}>Search Other City</StyleButton>
//     </ContentContainer>
//   );
// };
// export default WeatherDetails;










import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { WiHumidity, WiThermometer, WiStrongWind, WiSunrise, WiSunset } from 'react-icons/wi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/bg3.jpg';

const ContentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WeatherBox = styled(Box)`
  background-color: #989898;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Icon = styled.div`
  font-size: 36px;
`;

const StyleButton = styled(Button)`
  background-color: black;
  color: white;
  border-color: #989898;
  border-radius: 5px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #989898;
    color: black;
    border-color: black;
  }
`;

const WeatherDetails = ({ weatherData }) => {
  const { data } = weatherData;
  const { temp, wind_spd, pres, rh, precip, sunrise, sunset, city_name, weather } = data[0];
  const { description } = weather;
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/');
  };

  return (
    <ContentContainer>
      <WeatherBox>
        <Typography variant="body1">
          <Icon><WiThermometer /></Icon>
          Temperature: {temp}°C
        </Typography>
        <Typography variant="body1">
          <Icon><WiStrongWind /></Icon>
          Wind Speed: {wind_spd} m/s
        </Typography>
        <Typography variant="body1">
          <Icon><WiHumidity /></Icon>
          Humidity: {rh}%
        </Typography>
        <Typography variant="body1">
          <Icon><WiSunrise /></Icon>
          Sunrise: {sunrise}
        </Typography>
        <Typography variant="body1">
          <Icon><WiSunset /></Icon>
          Sunset: {sunset}
        </Typography>
        <Typography variant="body1">
          <Icon><WiHumidity /></Icon>
          Pressure: {pres} hPa
        </Typography>
        <Typography variant="body1">
          <Icon><WiSunrise /></Icon>
          City: {city_name}
        </Typography>
        <Typography variant="body1">
          <Icon><WiSunset /></Icon>
          Description: {description}
        </Typography>
        <Typography variant="body1">
          <Icon><WiSunset /></Icon>
          Precipitation: {precip} mm
        </Typography>
      </WeatherBox>
      <StyleButton variant="outlined" onClick={handleButton}>
        Search Other City
      </StyleButton>
    </ContentContainer>
  );
};

export default WeatherDetails;

