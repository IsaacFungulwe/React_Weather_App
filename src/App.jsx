import { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import TemperatureChart from './components/TemperatureChart';
import Insights from './components/Insights';
import LandingPage from './components/LandingPage';
import { fetchWeather } from './api/fetchWeather';
import { processForecast } from './utils/processForecast';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (cityName) => {
    try {
      setLoading(true);
      setError('');
      const data = await fetchWeather(cityName);
      const processed = processForecast(data.list);
      setWeatherData({
        city: data.city.name,
        current: {
          temp: data.list[0].main.temp,
          condition: data.list[0].weather[0].description,
        },
        forecast: processed,
      });
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found');
      } else {
        setError('Failed to fetch weather data');
      }
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Weather Forecast</h1>
      </header>

      <main className="app-main">
        <SearchBar onSearch={handleSearch} loading={loading} />

        {error && (
          <div className="error-card">
            <span className="error-icon">⚠️</span>
            <span className="error-message">{error}</span>
          </div>
        )}

        {!weatherData && !loading && !error && <LandingPage />}

        {weatherData && (
          <div className="weather-content">
            <CurrentWeather city={weatherData.city} current={weatherData.current} />
            <TemperatureChart forecast={weatherData.forecast} />
            <Insights forecast={weatherData.forecast} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
