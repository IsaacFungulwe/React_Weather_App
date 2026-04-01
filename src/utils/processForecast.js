export const processForecast = (list) => {
  const dailyData = {};

  list.forEach((item) => {
    const date = new Date(item.dt_txt);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

    if (!dailyData[dayOfWeek]) {
      dailyData[dayOfWeek] = {
        temps: [],
        conditions: [],
        humidity: [],
        windSpeed: [],
      };
    }

    dailyData[dayOfWeek].temps.push(item.main.temp);
    dailyData[dayOfWeek].conditions.push(item.weather[0].main);
    dailyData[dayOfWeek].humidity.push(item.main.humidity);
    dailyData[dayOfWeek].windSpeed.push(item.wind.speed);
  });

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const result = [];

  // First pass: calculate averages for available days
  const processedData = {};
  weekdays.forEach((day) => {
    if (dailyData[day]) {
      const temps = dailyData[day].temps;
      const avgTemp = temps.reduce((sum, t) => sum + t, 0) / temps.length;
      const avgHumidity = dailyData[day].humidity.reduce((sum, h) => sum + h, 0) / dailyData[day].humidity.length;
      const avgWindSpeed = dailyData[day].windSpeed.reduce((sum, w) => sum + w, 0) / dailyData[day].windSpeed.length;

      processedData[day] = {
        day,
        temp: Math.round(avgTemp * 10) / 10,
        conditions: [...new Set(dailyData[day].conditions)],
        humidity: Math.round(avgHumidity),
        windSpeed: Math.round(avgWindSpeed * 10) / 10,
      };
    }
  });

  // Second pass: interpolate missing days
  weekdays.forEach((day, index) => {
    if (processedData[day]) {
      result.push(processedData[day]);
    } else {
      // Find previous and next available days
      let prevDay = null;
      let nextDay = null;

      // Look backwards for previous day
      for (let i = index - 1; i >= 0; i--) {
        if (processedData[weekdays[i]]) {
          prevDay = processedData[weekdays[i]];
          break;
        }
      }

      // Look forwards for next day
      for (let i = index + 1; i < weekdays.length; i++) {
        if (processedData[weekdays[i]]) {
          nextDay = processedData[weekdays[i]];
          break;
        }
      }

      // Interpolate or use closest available day
      let interpolatedData;
      if (prevDay && nextDay) {
        // Interpolate between previous and next
        interpolatedData = {
          day,
          temp: Math.round(((prevDay.temp + nextDay.temp) / 2) * 10) / 10,
          conditions: [...new Set([...prevDay.conditions, ...nextDay.conditions])],
          humidity: Math.round((prevDay.humidity + nextDay.humidity) / 2),
          windSpeed: Math.round(((prevDay.windSpeed + nextDay.windSpeed) / 2) * 10) / 10,
        };
      } else if (prevDay) {
        // Use previous day
        interpolatedData = {
          ...prevDay,
          day,
        };
      } else if (nextDay) {
        // Use next day
        interpolatedData = {
          ...nextDay,
          day,
        };
      } else {
        // Fallback to default values if no data available
        interpolatedData = {
          day,
          temp: 20,
          conditions: ['Clear'],
          humidity: 50,
          windSpeed: 5,
        };
      }

      result.push(interpolatedData);
    }
  });

  return result;
};