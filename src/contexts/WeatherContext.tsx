import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchCurrentWeather, fetchWeatherForecast } from "../services";
import type { WeatherContextType, WeatherData } from "../types";

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useWeather must be used within WeatherProvider");
  return context;
};

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [city, setCity] = useState<string>("London");
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const searchWeather = async (customCity: string = city) => {
    if (!customCity.trim()) return;
    setLoading(true);
    setError(false);

    try {
      // Fetch current weather
      const current = await fetchCurrentWeather(customCity);

      // Fetch 5-day forecast
      const forecastRes = await fetchWeatherForecast(customCity);

      const dailyForecast = forecastRes.list
        .filter((item: any) => item.dt_txt.includes("12:00:00"))
        .slice(0, 5)
        .map((item: any) => ({
          day: new Date(item.dt * 1000).toLocaleDateString("en", { weekday: "short" }),
          temp: Math.round(item.main.temp),
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        }));

      const data: WeatherData = {
        city: current.name,
        current: {
          temp: Math.round(current.main.temp),
          feelsLike: Math.round(current.main.feels_like),
          humidity: current.main.humidity,
          windSpeed: current.wind.speed,
          pressure: current.main.pressure,
          description: current.weather[0].description,
          icon: current.weather[0].icon,
        },
        forecast: dailyForecast,
      };

      setWeatherData(data);
    } catch (err) {
      console.error("Weather fetch error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const convertTemp = (temp: number) =>
    isCelsius ? temp : Math.round(temp * 9 / 5 + 32);

  useEffect(() => {
    searchWeather("London");
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        isCelsius,
        setIsCelsius,
        loading,
        error,
        weatherData,
        searchWeather,
        convertTemp,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
