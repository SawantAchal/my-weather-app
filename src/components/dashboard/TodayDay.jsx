import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { MdDateRange } from "react-icons/md";


// Styled components for the box, typography, and icon
const FBox = styled(Box)`
color :black;
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
    // State variables to hold the day name and current time
    const [dayName, setDayName] = useState('');
    const [currentTime, setCurrentTime] = useState('');

      // useEffect hook to update the day name and current time
  useEffect(() => {
        // Array of days of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // Get the current date
    const today = new Date();
        // Get the day of the week (0-6)
    const dayOfWeek = today.getDay();
    // Set the day name based on the day of the week
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

  // Render the component
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