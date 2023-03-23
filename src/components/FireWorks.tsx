import { useEffect, useRef, useState } from 'react';

type Shell = { x: number; y: number; xoff: number; yoff: number; size: number; color: string };
type Path = { x: number; y: number; xoff: number; yoff: number; size: number; color: string };

const FireWorks = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  let cWidth = window.innerWidth;
  let cHeight = window.innerHeight;
  const shells: Array<Shell> = [];
  const pass: Array<Path> = [];
  const colors = [
    '#ff5252',
    '#ff4081',
    '#e040fb',
    '#7c4dff',
    '#40cdff',
    '#18ffff',
    '#64ffda',
    '#69f0ae',
    '#b2fff59'
  ];
  let lastRun = 0;

  const [cContext, setCContext] = useState<CanvasRenderingContext2D | null>();

  const reset = () => {
    if (!canvas.current) return;

    cWidth = window.innerWidth;
    cHeight = window.innerHeight;
    canvas.current.width = cWidth;
    canvas.current.height = cHeight;
  };

  const newShell = () => {
    const left = Number(Math.random() > 0.5);
    const shell = {
      x: 1 * left,
      y: 1,
      xoff: (0.01 + Math.random() * 0.007) * (left ? 1 : -1),
      yoff: 0.01 + Math.random() * 0.007,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)]
    };

    shells.push(shell);
  };

  const newPass = (shell: Shell) => {
    const pasCount = Math.ceil(Math.pow(shell.size, 2) * Math.PI);

    for (let i = 0; i < pasCount; i++) {
      const a = Math.random() * 4;
      const s = Math.random() * 10;
      const pas: Path = {
        x: shell.x * cWidth,
        y: shell.y * cHeight,
        xoff: s * Math.sin((5 - a) * (Math.PI / 2)),
        yoff: s * Math.sin(a * (Math.PI / 2)),
        size: Math.sqrt(shell.size),
        color: shell.color
      };

      if (pass.length < 1000) pass.push(pas);
    }
  };

  const run = () => {
    if (!cContext) return;

    let dt = 1;
    if (lastRun !== 0) dt = Math.min(50, performance.now() - lastRun);
    lastRun = performance.now();

    cContext.fillStyle = 'rgba(0,0,0,0.1)';
    // cContext.fillRect(0, 0, cWidth, cHeight); <-- for black background
    cContext.clearRect(0, 0, cWidth, cHeight);

    if (shells.length < 10 && Math.random() > 0.96) newShell();

    for (const ix in shells) {
      const shell = shells[ix];
      cContext.beginPath();
      cContext.arc(shell.x * cWidth, shell.y * cHeight, shell.size, 0, 2 * Math.PI);
      cContext.fillStyle = shell.color;
      cContext.fill();

      shell.x -= shell.xoff;
      shell.y -= shell.yoff;
      shell.xoff -= shell.xoff * dt * 0.001;
      shell.yoff -= (shell.yoff + 0.2) * dt * 0.00005;

      if (shell.yoff < -0.005) {
        newPass(shell);
        shells.splice(Number(ix), 1);
      }
    }

    for (const ix in pass) {
      const pas = pass[ix];

      cContext.beginPath();
      cContext.arc(pas.x, pas.y, pas.size, 0, 2 * Math.PI);
      cContext.fillStyle = pas.color;
      cContext.fill();

      pas.x -= pas.xoff;
      pas.y -= pas.yoff;
      pas.xoff -= pas.xoff * dt * 0.001;
      pas.yoff -= (pas.yoff + 5) * dt * 0.00005;
      pas.size -= dt * 0.002 * Math.random();

      if (pas.y > cHeight || pas.y < -50 || pas.size <= 0) pass.splice(Number(ix), 1);
    }
    requestAnimationFrame(run);
  };

  useEffect(() => {
    window.onresize = function () {
      reset();
    };
    reset();
  }, []);

  useEffect(() => {
    if (!canvas?.current) return;

    const cContext = canvas.current.getContext('2d');
    setCContext(cContext);
  }, [canvas]);

  useEffect(() => {
    if (!cContext) return;
    run();
  }, [cContext]);

  return <canvas ref={canvas} className="fireworks"></canvas>;
};

export default FireWorks;
