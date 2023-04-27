import React from 'react';

const CloudLayout: React.FC = React.memo(() => {
  return (
    <div className="game-app_cloud-layout">
      <div id="cloud1">
        <img src={`${process.env.PUBLIC_URL}/clouds/cloud-01.png`} alt="cloud" />
      </div>
      <div id="cloud2">
        <img src={`${process.env.PUBLIC_URL}/clouds/cloud-02.png`} alt="cloud" />
      </div>
      <div id="cloud3">
        <img src={`${process.env.PUBLIC_URL}/clouds/cloud-03.png`} alt="cloud" />
      </div>
      <div id="cloud4">
        <img src={`${process.env.PUBLIC_URL}/clouds/cloud-04.png`} alt="cloud" />
      </div>
      <div id="cloud5">
        <img src={`${process.env.PUBLIC_URL}/clouds/cloud-05.png`} alt="cloud" />
      </div>
      <div id="cloud6">
        <img src={`${process.env.PUBLIC_URL}/clouds/cloud-06.png`} alt="cloud" />
      </div>
    </div>
  );
});

CloudLayout.displayName = 'CloudLayout';

export default CloudLayout;
