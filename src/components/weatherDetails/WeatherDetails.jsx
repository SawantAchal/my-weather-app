import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { WiHumidity, WiThermometer, WiStrongWind, WiSunrise, WiSunset } from 'react-icons/wi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components for weather container and weather box
const ContentContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WeatherBox = styled(Box)`
  // background-color: #cbcccb;
  border: 2px solid gray; 
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

// WeatherDetails component to display weather information
const WeatherDetails = ({ weatherData }) => {
  const { data } = weatherData;
  const { temp, wind_spd, pres, rh, precip, sunrise, sunset, city_name, weather } = data[0];
  const { description } = weather;
  const navigate = useNavigate();

    // Function to handle button click
  const handleButton = () => {
    navigate('/');
  };
 // Rendering weather details and button
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

