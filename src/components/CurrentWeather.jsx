const CurrentWeather = ({ city, current }) => {
  const getWeatherIcon = (condition) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('clear')) return '☀️';
    if (conditionLower.includes('cloud')) return '☁️';
    if (conditionLower.includes('rain')) return '🌧️';
    if (conditionLower.includes('snow')) return '❄️';
    if (conditionLower.includes('thunder')) return '⛈️';
    if (conditionLower.includes('mist') || conditionLower.includes('fog')) return '🌫️';
    return '🌤️';
  };

  return (
    <div className="current-weather-card">
      <h2 className="city-name">{city}</h2>
      <div className="weather-details">
        <div className="temp-display">
          <span className="temperature">{current.temp}°C</span>
        </div>
        <div className="condition-display">
          <span className="condition-icon">{getWeatherIcon(current.condition)}</span>
          <span className="condition">{current.condition}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;