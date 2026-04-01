const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-card">
        <div className="landing-content">
          <div className="landing-icon">🌤️</div>
          <h1 className="landing-title">Weather Trend Planner</h1>
          <p className="landing-subtitle">Enter a city to begin exploring weather patterns</p>
          <div className="landing-features">
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <span>7-Day Temperature Trends</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🧠</span>
              <span>Smart Weather Insights</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📱</span>
              <span>Mobile Responsive</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;