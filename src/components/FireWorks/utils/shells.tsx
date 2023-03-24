import { Path, Shell } from '..';
import { addNewPath } from './pathes';

type AddNewShell = {
  shells: Array<Shell>;
  colors: Array<string>;
};

export const addNewShell = (props: AddNewShell) => {
  const { shells, colors } = props;
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

type CreateShell = {
  cContext: CanvasRenderingContext2D;
  shell: Shell;
  cWidth: number;
  cHeight: number;
  dt: number;
  pathes: Array<Path>;
  shells: Array<Shell>;
  shellId: string;
};

export const createShell = (props: CreateShell) => {
  const { cContext, shell, cWidth, cHeight, dt, pathes, shells, shellId } = props;
  cContext.beginPath();
  cContext.arc(shell.x * cWidth, shell.y * cHeight, shell.size, 0, 2 * Math.PI);
  cContext.fillStyle = shell.color;
  cContext.fill();

  shell.x -= shell.xoff;
  shell.y -= shell.yoff;
  shell.xoff -= shell.xoff * dt * 0.001;
  shell.yoff -= (shell.yoff + 0.2) * dt * 0.00005;

  if (shell.yoff < -0.005) {
    addNewPath({ shell, cWidth, cHeight, pathes });
    shells.splice(Number(shellId), 1);
  }
};
