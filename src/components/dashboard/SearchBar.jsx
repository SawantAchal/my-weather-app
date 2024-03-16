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
color: gray;
border-radius: 2%;
border-color: black;
width:30%
width: fit-content; /* Adjust to make button size smaller */
    align-self: center; /* Center button horizontally */
`

const Input = styled(TextField)`
width: 100%;

& .MuiOutlinedInput-root {
    border-color: black; /* Change border color */
    color: white; /* Change text color */
    background-color: transparent;
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
        <Input id="outlined-basic" label="City" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)}/>
        <WButton variant="outlined" onClick={handleSearch}>Get Weather</WButton>
    </FBox>
  )
}

export default SearchBar