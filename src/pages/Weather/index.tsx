import { WeatherProvider } from "../../contexts/WeatherContext"
import CurrentWeather from "./CurrentWeather"
import WeatherForecast from "./WeatherForecast"
import WeatherSearch from "./WeatherSearch"

const Weather = () => {
    return (
        <WeatherProvider>
            <main className="max-w-7xl mx-auto px-6 py-8 mb-10">
                <WeatherSearch />
                <CurrentWeather />
                <WeatherForecast />
            </main>
        </WeatherProvider>
    )
}

export default Weather