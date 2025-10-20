import React, { FC } from 'react';
import '../../style/rates.css';
import '../../style/App.css';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  const safeProgress = Math.max(0, Math.min(100, progress));
  const fillerWidth = `${safeProgress}%`;

  return (
    <div className="progress-bar-container">
      <div 
        className="progress-bar-filler" 
        style={{ width: fillerWidth }}
      />
    </div>
  );
};

const App: FC = () => {
  const percentageFront = 80;
  const percentageEmbeded = 95;
  const percentageProgramming = 70;

  return (
    <section id="rates" className="rate">
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }} className="rates-div">
      <h1>Rates of My Skill</h1>

      <p>Frontend/Design : <strong>{percentageFront}%</strong></p>
      <ProgressBar progress={percentageFront} />

      <p>Embeded/Engineering : <strong>{percentageEmbeded}%</strong></p>
      <ProgressBar progress={percentageEmbeded} />

      <p>Programming : <strong>{percentageProgramming}%</strong></p>
      <ProgressBar progress={percentageProgramming} />
    </div>
    <DotLottieReact
      src="https://lottie.host/807a82ed-ecc3-46be-911f-4eddfdc7c21f/6xpnsuVWBD.lottie"
      loop
      autoplay
      style={{ width: '60%'}}
    />
    </section>
  );
};

export default App;