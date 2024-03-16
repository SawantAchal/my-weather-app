import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import { WiHumidity, WiThermometer, WiStrongWind } from 'react-icons/wi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const WeatherContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const WeatherBox = styled(Box)`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
`;

const Icon = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
`;

const StyleButton = styled(Button)`
  background-color: #3f51b5;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #303f9f;
  }
`

const WeatherDetails = ({weatherData}) => {
    const {main , wind} = weatherData;
    const navigate = useNavigate()

  const handleButton = () => {
  navigate('/')
  }

  return (
    <Box>
    <WeatherContainer>
      <WeatherBox>
        <Icon><WiThermometer /></Icon>
        <Typography variant="body1">Temperature: {main.temp}°C</Typography>
      </WeatherBox>
      <WeatherBox>
        <Icon><WiHumidity /></Icon>
        <Typography variant="body1">Humidity: {main.humidity}%</Typography>
      </WeatherBox>
      <WeatherBox>
        <Icon><WiStrongWind /></Icon>
        <Typography variant="body1">Wind Speed: {wind.speed} m/s</Typography>
      </WeatherBox>
    </WeatherContainer>
    <StyleButton variant="outlined" onClick={handleButton}>Search Other City</StyleButton>

    </Box>

  )
}

export default WeatherDetails