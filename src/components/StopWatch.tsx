import React from 'react';
import { useState, useEffect } from 'react';

type Props = {
  resetTime: boolean;
  runTimer: boolean;
  saveTime?: (time: number) => void;
};

const Stopwatch: React.FC<Props> = React.memo((props: Props) => {
  const { resetTime, runTimer, saveTime = () => {} } = props;

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (isRunning) intervalId = setInterval(() => setTime(time + 1), 10);

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  useEffect(() => {
    if (!resetTime) return;
    setTime(0);
  }, [resetTime]);

  useEffect(() => {
    setIsRunning(runTimer);
    if (!runTimer) saveTime(time);
  }, [runTimer]);

  useEffect(() => {
    setHours(Math.floor(time / 360000));
    setMinutes(Math.floor((time % 360000) / 6000));
    setSeconds(Math.floor((time % 6000) / 100));
  }, [time]);

  return (
    <div className="stopwatch">
      <p className="stopwatch_timer">
        {hours ? hours + 'h' : ''}
        {minutes.toString()}m {seconds.toString().padStart(2, '0')}s
      </p>
    </div>
  );
});

Stopwatch.displayName = 'Stopwatch';

export default Stopwatch;
