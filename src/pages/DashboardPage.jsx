import React from 'react'
import SearchBar from '../components/dashboard/SearchBar'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import backgroundImage from '../assets/bg4.jpg' // Importing background image
import TodayDay from '../components/dashboard/TodayDay'; // Importing TodayDay component

// Styled component for the main dashboard container
const DashboardConatiner = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
  background-position: 100%;
  
`;

// Styled component for the container holding TodayDay component
const TodayDayContainer = styled(Box)`
position: absolute;
top: 0;
left: 0;
margin-left: 2%;
`
// Functional component for the DashboardPage
const DashboardPage = () => {
  return (
    <DashboardConatiner>
      {/* Container for TodayDay component */}
      <TodayDayContainer>
        <TodayDay/>
      </TodayDayContainer>
         {/* Container for Weather Forecast heading and SearchBar */}
      <Box>
        <h1>Weather Forecast</h1>
        {/* SearchBar component */}
        <SearchBar/>
      </Box>
    </DashboardConatiner>
  )
}

export default DashboardPage