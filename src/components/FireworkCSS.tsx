import React from 'react';

const FireworkCSS: React.FC = React.memo(() => {
  const fireworkAmount = [...Array(5).keys()];
  const explosionAmount = [...Array(12).keys()];

  return (
    <div className="fireworks-container">
      {fireworkAmount.map((index) => (
        <div key={index} className="firework" id={`firework${index + 1}`}>
          {explosionAmount.map((expIndex) => (
            <div key={index * 10 + expIndex} className="explosion" />
          ))}
        </div>
      ))}
    </div>
  );
});

FireworkCSS.displayName = 'FireWorkCSS';

export default FireworkCSS;
