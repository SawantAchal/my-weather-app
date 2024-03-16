import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { MdDateRange } from "react-icons/md";

const FBox = styled(Box)`
color :white;
display: flex;
align-items: center;
`
const Typo = styled(Typography)`
margin-Top : -1rem;
padding-Left :2rem
`
const Icon = styled(MdDateRange)`
font-size: 2rem;
margin-right: 0.5rem;
`

const TodayDay = () => {
    const [dayName, setDayName] = useState('');
    const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayOfWeek = today.getDay();
    setDayName(daysOfWeek[dayOfWeek]);

    // Function to format time as HH:MM:SS
    const formatTime = (time) => {
      return time < 10 ? '0' + time : time;
    };

    // Update current time every second
    const interval = setInterval(() => {
      const now = new Date();
      const hours = formatTime(now.getHours());
      const minutes = formatTime(now.getMinutes());
      const seconds = formatTime(now.getSeconds());
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures that this effect runs only once


  return (
    <FBox>
        <Icon/>
        <Box>
          <h1>{dayName}</h1>
          <Typo variant='body1'>{currentTime}</Typo>
        </Box>

    </FBox>

  )
}

export default TodayDay