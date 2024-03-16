import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, TextField } from '@mui/material'
import styled from '@emotion/styled'

const FBox = styled(Box)`
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 2rem;
`

const WButton = styled(Button)`
margin-top: 2rem;
width:30%
width: fit-content;
align-self: center;
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
`

const Input = styled(TextField)`
width: 100%;

& .MuiOutlinedInput-root {
    border-color: black;
    color: black;
    background-color: transparent;
    font-size: 20px;
    font-style:bold;
}

@media (min-width: 600px) {
    width: 800px; 
}
`

const SearchBar = () => {
    const [city , setCity ] = useState('')
    const navigate = useNavigate()

    //Function for button to serach city
    const handleSearch = async () => {
        try {
          if (city) {
            const isValidCity = await validateCity(city);
            if (isValidCity) {
              navigate(`/weather-details/${encodeURIComponent(city)}`);
            } else {
              alert('Please enter a valid city');
            }
          } else {
            alert('Please enter a city');
          }
        } catch (error) {
          console.error('Error validating city:', error);
          alert('Failed to validate city');
        }
      };

      const validateCity = async (city) => {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`);
          if (!response.ok) {
            throw new Error('Failed to validate city');
          }
          const data = await response.json();
          return data && data.length > 0;
        } catch (error) {
          throw new Error('Failed to validate city');
        }
      };

      // Render the component
  return (
    <FBox>
        <Input id="outlined-basic" label="Enter a City" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)}/>
        <WButton variant="outlined" onClick={handleSearch}>Get Weather</WButton>
    </FBox>
  )
}

export default SearchBar
