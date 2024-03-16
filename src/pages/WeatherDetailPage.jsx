import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getWeatherData } from '../utils/api';
import WeatherDetails from '../components/weatherDetails/WeatherDetails';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import bg from '../assets/bg2.jpg';

const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Ensure background covers the entire viewport */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1; /* Ensure content is above background */
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-style: italic;
  color: black;
  text-align: center;
`;

const WeatherDetailPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const { city } = useParams(); //get city from params

  //function to fetch weather data for the specified location
  const fetchWeatherData = async () => {
    try {
      //API call to fetch weather data
      const response = await getWeatherData(city);
      if (response) {
        //set weather data in state
        setWeatherData(response);
      }
    } catch (error) {
      console.error('Error while fetching weather data:', error);
    }
  };

  //fetch weather data when component mount
  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  return (
    <Container>
      <ContentContainer>
        <Heading>
          Weather Forecast for: {city}
        </Heading>
        {/* check if weather data is available */}
        {weatherData && <WeatherDetails weatherData={weatherData} />}
      </ContentContainer>
    </Container>
  );
};

export default WeatherDetailPage;
