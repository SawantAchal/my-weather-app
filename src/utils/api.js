const API_KEY = '2691bbc0c06a04af08aff5bb18864db8'

export const getWeatherData = async (city) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Failed to fetch weather data')
        }

        const data  = await res.json();
        console.log(data);
        return data;

    } catch (error) {
        throw new Error('Failed to fetch weather data')
    }
}