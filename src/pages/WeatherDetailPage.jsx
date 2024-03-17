import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getWeatherData, getWeatherForecast } from '../utils/api';
import WeatherDetails from '../components/weatherDetails/WeatherDetails';
import styled from '@emotion/styled';
import bg from '../assets/bg5.webp';
import WeatherForecast from '../components/weatherDetails/WeatherForecast';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    opacity: 0.7;
    z-index: -1;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
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
  const [forecastData, setForecastData] = useState(null);
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
  // Function to fetch weather forecast data for the specified location
  const fetchWeatherForecast = async () => {
    try {
      const response = await getWeatherForecast(city);
      if (response) {
        setForecastData(response.data);
      }
    } catch (error) {
      console.error('Error fetching weather forecast data:', error);
    }
  };

  //fetch weather data when component mount
  useEffect(() => {
    fetchWeatherData();
    fetchWeatherForecast();
  }, [city, fetchWeatherData, fetchWeatherForecast]);

  return (
    <Container>
      <ContentContainer>
        <Heading>Weather Forecast for: {city}</Heading>
        {/* check if weather data is available */}
        {weatherData && <WeatherDetails weatherData={weatherData} />}
        {forecastData && <WeatherForecast forecastData={forecastData} />}
      </ContentContainer>
    </Container>
  );
};

export default WeatherDetailPage;
