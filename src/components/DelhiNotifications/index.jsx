import React, { useState } from 'react';
import './styles.css';
import { Bell, X, Car, Construction, Wind, MapPin } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const DelhiNotifications = () => {
  const [showNotification, setShowNotification] = useState(false);
  
  // Error boundary state
  const [hasError, setHasError] = React.useState(false);

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
  });
  const isOddDay = today.getDate() % 2 === 1;
  
  if (hasError) {
    return (
      <div className="error-notification">
        Something went wrong. Please refresh the page.
      </div>
    );
  }

  return (
    <div className="notifications-wrapper">
      <button 
        onClick={() => setShowNotification(true)}
        className="delhi-updates-btn"
      >
        Show Updates
      </button>

      {showNotification && (
        <div className="notification-panel">
          <div className="notification-content">
            <div className="notification-header">
              <h2>Delhi Updates - {formattedDate}</h2>
              <button 
                onClick={() => setShowNotification(false)}
                className="close-btn"
              >
                ✕
              </button>
            </div>

            <div className="updates-container">
              {/* AQI Section */}
              <div className="update-card">
                <div className="aqi-header">
                  <span className="wind-icon">💨</span>
                  Overall Air Quality Index: <span className="aqi-value">285 (Very Poor)</span>
                </div>
                
                <div className="local-aqi">
                  <p>Local AQI Readings:</p>
                  <div className="aqi-grid">
                    <div className="aqi-location">
                      <span className="location-icon">📍</span>
                      Vigyan Bhawan: <span className="aqi-number">245</span>
                    </div>
                    <div className="aqi-location">
                      <span className="location-icon">📍</span>
                      India Gate: <span className="aqi-number">268</span>
                    </div>
                    <div className="aqi-location">
                      <span className="location-icon">📍</span>
                      Lodhi Road: <span className="aqi-number">230</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle Rule Card */}
              <div className="update-card">
                <div className="vehicle-rule">
                  <span className="car-icon">🚗</span>
                  Today's Odd-Even Rule: {isOddDay ? "Odd" : "Even"} numbered vehicles allowed
                </div>
              </div>

              {/* Road Works Card */}
              <div className="update-card">
                <div className="roadworks">
                  <span className="construction-icon">🚧</span>
                  Ongoing Road Works:
                  <div className="roadworks-list">
                    <p>Nehru Place (Duration: 2 days)</p>
                    <p>Connaught Place (Duration: 5 days)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DelhiNotifications;