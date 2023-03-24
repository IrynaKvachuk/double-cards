import { Path, Shell } from '..';

type AddNewPath = {
  shell: Shell;
  cWidth: number;
  cHeight: number;
  pathes: Array<Path>;
};

export const addNewPath = (props: AddNewPath) => {
  const { shell, cWidth, cHeight, pathes } = props;
  const pathCount = Math.ceil(Math.pow(shell.size, 2) * Math.PI);

  for (let i = 0; i < pathCount; i++) {
    if (pathes.length >= 1000) break;

    const a = Math.random() * 4;
    const s = Math.random() * 10;
    const path: Path = {
      x: shell.x * cWidth,
      y: shell.y * cHeight,
      xoff: s * Math.sin((5 - a) * (Math.PI / 2)),
      yoff: s * Math.sin(a * (Math.PI / 2)),
      size: Math.sqrt(shell.size),
      color: shell.color
    };

    pathes.push(path);
  }
};

type CreatePath = {
  cContext: CanvasRenderingContext2D;
  path: Shell;
  cHeight: number;
  dt: number;
  pathes: Array<Path>;
  pathId: string;
};

export const createPath = (props: CreatePath) => {
  const { cContext, path, cHeight, dt, pathes, pathId } = props;
  cContext.beginPath();
  cContext.arc(path.x, path.y, path.size, 0, 2 * Math.PI);
  cContext.fillStyle = path.color;
  cContext.fill();

  path.x -= path.xoff;
  path.y -= path.yoff;
  path.xoff -= path.xoff * dt * 0.001;
  path.yoff -= (path.yoff + 5) * dt * 0.00005;
  path.size -= dt * 0.002 * Math.random();

  if (path.y > cHeight || path.y < -50 || path.size <= 0) pathes.splice(Number(pathId), 1);
};
