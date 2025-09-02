const API_URL = import.meta.env.VITE_API_URL;
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchCurrentWeather = async (city: string) => {
    const response = await fetch(
        `${API_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch current weather data");
    }
    return response.json();
};

export const fetchWeatherForecast = async (city: string) => {
    const response = await fetch(
        `${API_URL}/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch weather forecast data");
    }
    return response.json();
};