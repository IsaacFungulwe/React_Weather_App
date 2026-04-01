import { useMemo } from 'react';

const Insights = ({ forecast }) => {
  const insights = useMemo(() => {
    if (!forecast || forecast.length === 0) return [];

    const temps = forecast.map(d => d.temp);
    const maxTemp = Math.max(...temps);
    const minTemp = Math.min(...temps);
    const maxDay = forecast.find(d => d.temp === maxTemp);
    const minDay = forecast.find(d => d.temp === minTemp);

    const result = [];

    // Best day to go out
    result.push({
      type: 'sun',
      title: 'Best day to go out',
      description: `${maxDay.day} with ${maxTemp}°C`,
    });

    // Coldest day
    result.push({
      type: 'snow',
      title: 'Coldest day',
      description: `${minDay.day} with ${minTemp}°C`,
    });

    // Heat warning
    if (maxTemp > 35) {
      result.push({
        type: 'fire',
        title: 'Heat warning',
        description: 'Temperatures above 35°C expected',
      });
    }

    // Cold warning
    if (minTemp < 5) {
      result.push({
        type: 'snowflake',
        title: 'Cold warning',
        description: 'Temperatures below 5°C expected',
      });
    }

    // Rain check
    const hasRain = forecast.some(d =>
      d.conditions && d.conditions.some(c => c.toLowerCase().includes('rain'))
    );
    if (hasRain) {
      result.push({
        type: 'cloud-rain',
        title: 'Rain expected',
        description: 'Pack an umbrella',
      });
    }

    // Humidity insight
    const avgHumidity = forecast.reduce((sum, d) => sum + (d.humidity || 0), 0) / forecast.length;
    if (avgHumidity > 70) {
      result.push({
        type: 'droplets',
        title: 'High humidity',
        description: 'Expect muggy conditions',
      });
    }

    // Wind insight
    const avgWind = forecast.reduce((sum, d) => sum + (d.windSpeed || 0), 0) / forecast.length;
    if (avgWind > 10) {
      result.push({
        type: 'wind',
        title: 'Windy conditions',
        description: 'Hold onto your hat!',
      });
    }

    return result;
  }, [forecast]);

  const getIcon = (type) => {
    const icons = {
      sun: '☀️',
      snow: '❄️',
      fire: '🔥',
      snowflake: '🌨️',
      'cloud-rain': '🌧️',
      droplets: '💧',
      wind: '💨',
    };
    return icons[type] || 'ℹ️';
  };

  return (
    <div className="insights-card">
      <h3 className="insights-title">Weather Insights</h3>
      <div className="insights-grid">
        {insights.map((insight, index) => (
          <div key={index} className="insight-item">
            <div className="insight-icon">{getIcon(insight.type)}</div>
            <div className="insight-content">
              <h4 className="insight-title-text">{insight.title}</h4>
              <p className="insight-description">{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;