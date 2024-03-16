
// Function to fetch current weather data for a specified city
  export const getWeatherData = async (city) => {
    try {
      const url =` https://api.weatherbit.io/v2.0/current?city=${encodeURIComponent(city)}&key=fdae205ac152404fa1cd9cd19ce086ea`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      console.log({data});
      if (data.data && data.data.length > 0) {
        return data;
      } else {
        throw new Error('City not found');
      }
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  };
  
  
  // Function to fetch weather forecast data for a specified city
  export const getWeatherForecast = async (city) => {
    try {
      const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${encodeURIComponent(city)}&days=7&key=fdae205ac152404fa1cd9cd19ce086ea`);
     
      if (!response.ok) {
        throw new Error('Failed to fetch weather forecast data');
      }
      const data = await response.json();
      console.log({data});
      return data;
    } catch (error) {
      throw new Error('Failed to fetch weather forecast data');
    }
  };
