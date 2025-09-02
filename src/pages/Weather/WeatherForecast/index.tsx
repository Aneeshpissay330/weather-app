import { useWeather } from "../../../contexts/WeatherContext";

const WeatherForecast = () => {
    const { weatherData } = useWeather();
    return (
        <section id="forecast-section" className="">
            <h3 className="text-xl font-bold mb-6">5-Day Forecast</h3>
            <div className="grid grid-cols-5 gap-4" id="forecast-grid">
                {weatherData?.forecast.map((data, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                        <p className="font-medium mb-3">{data.day}</p>
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <img
                                src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                                alt={data.description}
                                className="w-10 h-10"
                            />
                        </div>
                        <p className="text-xl font-bold mb-2">{data.temp}°</p>
                        <p className="text-sm text-gray-600 capitalize">{data.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WeatherForecast