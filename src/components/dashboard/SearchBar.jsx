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
    const handleSearch = () =>{
        if (city) {
            navigate(`/weather-details/${city}`)
        } else {
            alert('please enter a valid city name')
        }
    }
  return (
    <FBox>
        <Input id="outlined-basic" label="Enter a City" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)}/>
        <WButton variant="outlined" onClick={handleSearch}>Get Weather</WButton>
    </FBox>
  )
}

export default SearchBar
