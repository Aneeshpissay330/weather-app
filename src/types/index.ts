export interface CurrentWeather {
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  description: string;
  icon: string;
}

export interface ForecastDay {
  day: string;
  temp: number;
  description: string;
  icon: string;
}

export interface WeatherData {
  city: string;
  current: CurrentWeather;
  forecast: ForecastDay[];
}

export interface WeatherContextType {
  city: string;
  setCity: (city: string) => void;
  isCelsius: boolean;
  setIsCelsius: (val: boolean) => void;
  loading: boolean;
  error: boolean;
  weatherData: WeatherData | null;
  searchWeather: (customCity?: string) => Promise<void>;
  convertTemp: (temp: number) => number;
}
