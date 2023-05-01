import React, { useState } from 'react';
import { useEffectOnce } from '../../hooks';

const FireworkCSS: React.FC = React.memo(() => {
  const [fireworkAmount, setFireworkAmount] = useState<Array<number>>([]);
  const [explosionAmount, setExplosionAmount] = useState<Array<number>>([]);

  useEffectOnce(() => {
    setFireworkAmount([...Array(5).keys()]);
    setExplosionAmount([...Array(12).keys()]);
  });

  return (
    <div className="fireworks-container" data-testid="fireworks-container">
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
