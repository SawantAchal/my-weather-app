import React from 'react'
import SearchBar from '../components/dashboard/SearchBar'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import backgroundImage from '../assets/bg4.jpg'
import TodayDay from '../components/dashboard/TodayDay'

const DashboardConatiner = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items:center;
  background-position: 100%;
  
`;

const TodayDayContainer = styled(Box)`
position: absolute;
top: 0;
left: 0;
margin-left: 2%;
`

const DashboardPage = () => {
  return (
    <DashboardConatiner>
      <TodayDayContainer>
        <TodayDay/>
      </TodayDayContainer>
      <Box>
        <h1>Weather Forecast</h1>
        <SearchBar/>
      </Box>
    </DashboardConatiner>
  )
}

export default DashboardPage