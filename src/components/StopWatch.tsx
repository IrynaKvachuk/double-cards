import React from 'react';
import { useState, useEffect } from 'react';
import { Timer } from '../features/_common/types';

type Props = {
  resetTime: number;
  runTimer: boolean;
  saveTime?: (time: Timer) => void;
};

const Stopwatch: React.FC<Props> = React.memo((props: Props) => {
  const { resetTime, runTimer, saveTime = () => {} } = props;

  const [time, setTime] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (runTimer) {
      intervalId = setInterval(() => setTime((time) => time + 1), 1000);
    }
    if (!runTimer && seconds) {
      saveTime({ minutes, seconds });
    }

    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runTimer]);

  useEffect(() => {
    if (!resetTime) return;

    setTime(0);
    setMinutes(0);
    setSeconds(0);
  }, [resetTime]);

  useEffect(() => {
    setMinutes(Math.floor((time % 3600) / 60));
    setSeconds(Math.floor(time % 60));
  }, [time]);

  return (
    <div className="stopwatch">
      <p className="stopwatch_timer">
        {minutes.toString()}m {seconds.toString().padStart(2, '0')}s
      </p>
    </div>
  );
});

Stopwatch.displayName = 'Stopwatch';

export default Stopwatch;
