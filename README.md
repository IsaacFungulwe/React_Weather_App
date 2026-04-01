# Modern Weather Forecast App

A beautifully designed React application featuring a modern UI with glassmorphism effects, displaying comprehensive weather forecasts using the OpenWeather API.

## ✨ Features

- **Modern Glassmorphism UI**: Translucent cards with blur effects and smooth animations
- **Responsive Design**: Mobile-first layout that works perfectly on all devices
- **Dark/Light Mode**: Automatic theme switching based on system preferences
- **Landing Page**: Beautiful welcome screen with weather-themed design
- **Weekday Chart**: Temperature trends displayed by day names (Sunday-Saturday) with smart data interpolation for missing days
- **Smart Insights**: AI-generated weather insights with icons and recommendations
- **Weather Icons**: Dynamic icons next to current weather conditions
- **Smooth Animations**: Hover effects and transitions throughout the interface
- **Search Functionality**: Clean search bar with loading states

### Weather Insights Include:
- Best day to go out
- Coldest day
- Heat warnings (>35°C)
- Cold warnings (<5°C)
- Rain predictions
- Humidity alerts
- Wind conditions

## 🚀 Quick Start

1. **Clone or download** the project

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Get OpenWeather API Key**:
   - Visit [OpenWeather](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key in the API keys section

4. **Configure Environment**:
   Create a `.env` file in the root directory:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

5. **Run the app**:
   ```bash
   npm run dev
   ```

6. **Open your browser** to `http://localhost:5173` (or the port shown in terminal)

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Chart.js** - Beautiful, responsive charts
- **Axios** - HTTP client for API calls
- **CSS** - Modern styling with CSS variables and glassmorphism

## 📁 Project Structure

```
src/
├── api/
│   └── fetchWeather.js          # API service functions
├── components/
│   ├── SearchBar.jsx            # Search input component
│   ├── CurrentWeather.jsx       # Current weather display with icons
│   ├── TemperatureChart.jsx     # Chart.js temperature chart with null handling
│   ├── Insights.jsx             # Weather insights with icons
│   └── LandingPage.jsx          # Welcome landing page
├── utils/
│   └── processForecast.js       # Data processing utilities
├── App.jsx                      # Main app component
├── index.css                    # Modern CSS with glassmorphism
└── main.jsx                     # App entry point
```

## 🎨 Design Features

- **Glassmorphism**: Backdrop blur effects on all cards
- **Gradient Backgrounds**: Dynamic sky-inspired gradients
- **Rounded Corners**: Modern 1.5rem border-radius
- **Soft Shadows**: Subtle depth with CSS box-shadow
- **Smooth Transitions**: 0.3s ease transitions on interactions
- **Typography**: Inter font for clean, readable text
- **Color Scheme**: Cyan accent colors with high contrast

## 📱 Responsive Breakpoints

- **Desktop**: >768px - Full layout with grid insights
- **Tablet**: 480px-768px - Adjusted spacing and sizing
- **Mobile**: <480px - Single column, optimized touch targets

## 🔧 Data Processing

- **Smart Interpolation**: Missing weekday data is intelligently filled using adjacent days' values
- **Complete 7-Day View**: All weekdays (Sunday-Saturday) always display on the chart
- **Weather Icons**: Dynamic emoji icons based on current weather conditions

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy the weather! ☀️🌧️❄️**

```
src/
  App.jsx          # Main component
  index.css        # Styles
  main.jsx         # Entry point
  assets/          # Static assets
public/
  index.html       # HTML template
.env               # Environment variables (API key)
```
