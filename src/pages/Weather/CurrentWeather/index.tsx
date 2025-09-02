import { useWeather } from "../../../contexts/WeatherContext";

const CurrentWeather = () => {
    const { weatherData } = useWeather();
    return (
        <section id="current-weather" className="mb-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 id="current-city" className="text-2xl font-bold mb-1">
                            {weatherData?.city}
                        </h2>
                        <p id="current-date" className="text-gray-600">
                            {weatherData
                                ? new Date().toLocaleDateString("en-US", {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })
                                : "Loading..."}
                        </p>
                    </div>
                    <div className="text-right">
                        <div id="current-temp" className="text-5xl font-bold">
                            {weatherData?.current.temp}°
                        </div>
                        <p id="current-description" className="text-gray-600 capitalize">
                            {weatherData?.current.description}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    <div className="text-center">
                        <span className="material-symbols-outlined text-gray-400 text-xl mb-2">
                            visibility
                        </span>
                        <p className="text-sm text-gray-600 mb-1">Feels like</p>
                        <p id="feels-like" className="font-semibold">
                            {weatherData?.current.feelsLike}°
                        </p>
                    </div>
                    <div className="text-center">
                        <span className="material-symbols-outlined text-gray-400 text-xl mb-2">
                            water_drop
                        </span>
                        <p className="text-sm text-gray-600 mb-1">Humidity</p>
                        <p id="humidity" className="font-semibold">
                            {weatherData?.current.humidity}%
                        </p>
                    </div>
                    <div className="text-center">
                        <span className="material-symbols-outlined text-gray-400 text-xl mb-2">
                            air
                        </span>
                        <p className="text-sm text-gray-600 mb-1">Wind Speed</p>
                        <p id="wind-speed" className="font-semibold">
                            {weatherData?.current.windSpeed} km/h
                        </p>
                    </div>
                    <div className="text-center">
                        <span className="material-symbols-outlined text-gray-400 text-xl mb-2">
                            speed
                        </span>
                        <p className="text-sm text-gray-600 mb-1">Pressure</p>
                        <p id="pressure" className="font-semibold">
                            {weatherData?.current.pressure} hPa
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CurrentWeather