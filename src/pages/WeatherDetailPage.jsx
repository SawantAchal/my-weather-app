import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getWeatherData } from '../utils/api';
import WeatherDetails from '../components/weatherDetails/WeatherDetails';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import bg from '../assets/bg2.jpg'

const BoxConatiner = styled(Box)`
background-image: url(${bg});
background-size: cover;
height: 100vh;
display: flex;
justify-content: center;
align-items:center;
background-position: 100%;
`

const Typo = styled.span`
    font-size: 2rem;
    font-style:italic;
    color: pink;
`

const WeatherDetailPage = () => {
    const [weatherData , setWeatherData] = useState (null)
    const {city} = useParams(); //get city from params

    //function to fetch weather data for the specified location
    const fetchWeatherData = async () => {
        try {
            //API call to fetch weather data 
            const response = await getWeatherData(city)
            if(response) {
                //set weather data in state 
                setWeatherData(response)
            }
        } catch (error) {
            console.error('Error while fetching weather data:' , error)
        }
    }

    //fetch weather data when component mount
    useEffect(() => {
        fetchWeatherData()
    }, [city]);


  return (
    <BoxConatiner>
        <Box>
            <h1>Weather Forecast for : <Typo> {city}</Typo> </h1>
            {/* check if weather data is available  */}
            {
                weatherData && <WeatherDetails weatherData={weatherData} />
            }
        </Box>
    </BoxConatiner>
  )
}

export default WeatherDetailPage