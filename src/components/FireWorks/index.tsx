import { useEffect, useRef, useState } from 'react';
import { resetSize, runFireworks } from './utils';

export type Shell = {
  x: number;
  y: number;
  xoff: number;
  yoff: number;
  size: number;
  color: string;
};
export type Path = {
  x: number;
  y: number;
  xoff: number;
  yoff: number;
  size: number;
  color: string;
};

const FireWorks = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  const shells: Array<Shell> = [];
  const pathes: Array<Path> = [];

  const [cContext, setCContext] = useState<CanvasRenderingContext2D | null>();
  const [cWidth, setCWidth] = useState<number>(window.innerWidth);
  const [cHeight, setCHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    window.onresize = function () {
      resetSize({ canvas: canvas.current, setCWidth, setCHeight });
    };
    resetSize({ canvas: canvas.current, setCWidth, setCHeight });
  }, []);

  useEffect(() => {
    if (!canvas?.current) return;

    const cContext = canvas.current.getContext('2d');
    setCContext(cContext);
  }, [canvas]);

  useEffect(() => {
    if (!cContext) return;
    runFireworks({ cContext, cWidth, cHeight, shells, pathes });
  }, [cContext]);

  return <canvas ref={canvas} className="fireworks"></canvas>;
};

export default FireWorks;
