import React from 'react';
import './styles.css';

const DelhiNotifications = () => {
  const [showNotification, setShowNotification] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const today = new Date();
  const isOddDay = today.getDate() % 2 === 1;
  
  const getFormattedDate = () => {
    try {
      return today.toLocaleDateString();
    } catch (error) {
      return 'Today';
    }
  };

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
        Traffic Updates
      </button>

      {showNotification && (
        <div className="notification-panel">
          <div className="notification-content">
            {/* Header */}
            <div className="notification-header">
              <h2>Delhi Updates</h2>
              <button 
                onClick={() => setShowNotification(false)}
                className="close-btn"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="updates-container">
              {/* AQI Card */}
              <div className="update-card">
                <h3>Air Quality</h3>
                <div className="aqi-value">
                  AQI: 285 (Very Poor)
                </div>
              </div>

              {/* Vehicle Rule Card */}
              <div className="update-card">
                <h3>Vehicle Rule</h3>
                <div>
                  {isOddDay ? (
                    <span>Odd numbered vehicles allowed today</span>
                  ) : (
                    <span>Even numbered vehicles allowed today</span>
                  )}
                </div>
              </div>

              {/* Road Updates Card */}
              <div className="update-card">
                <h3>Road Updates</h3>
                <div className="road-updates">
                  <div>• Nehru Place: Construction ongoing</div>
                  <div>• CP: Road maintenance</div>
                </div>
              </div>
            </div>

            <div className="update-timestamp">
              Last updated: {getFormattedDate()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DelhiNotifications; 