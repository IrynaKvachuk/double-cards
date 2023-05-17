import React from 'react';

const StarSkyLayout: React.FC = React.memo(() => {
  return (
    <div className="star-sky-layout">
      <div className="star-sky">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="comet"></div>
      </div>
    </div>
  );
});

StarSkyLayout.displayName = 'StarSkyLayout';

export default StarSkyLayout;
