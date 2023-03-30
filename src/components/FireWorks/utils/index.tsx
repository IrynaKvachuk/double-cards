import { Path, Shell } from '..';
import { Dispatch, SetStateAction } from '../../../features/_common/types';
import { createPath } from './pathes';
import { addNewShell, createShell } from './shells';

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

type ResetSize = {
  canvas: HTMLCanvasElement | null;
  setCWidth: Dispatch<SetStateAction<number>>;
  setCHeight: Dispatch<SetStateAction<number>>;
};

export const resetSize = (props: ResetSize) => {
  const { canvas, setCWidth, setCHeight } = props;
  if (!canvas) return;

  const cWidth = window.innerWidth;
  const cHeight = window.innerHeight;

  setCWidth(cWidth);
  setCHeight(cHeight);
  canvas.width = cWidth;
  canvas.height = cHeight;

  return;
};

type RunFireworks = {
  cContext: CanvasRenderingContext2D | null;
  cWidth: number;
  cHeight: number;
  shells: Array<Shell>;
  pathes: Array<Path>;
};

export const runFireworks = (props: RunFireworks) => {
  const { cContext, cWidth, cHeight, shells, pathes } = props;
  if (!cContext) return;
  let dt = 1;

  if (lastRun !== 0) dt = Math.min(50, performance.now() - lastRun);
  lastRun = performance.now();

  cContext.fillStyle = 'rgba(0,0,0,0.1)';
  cContext.fillRect(0, 0, cWidth, cHeight);
  // <-- for black background
  cContext.clearRect(0, 0, cWidth, cHeight);

  // add new parent shell
  if (shells.length < 10 && Math.random() > 0.96) addNewShell({ shells, colors });

  // add shell's children
  for (const shellId in shells) {
    createShell({ cContext, shell: shells[shellId], cWidth, cHeight, dt, pathes, shells, shellId });
  }

  // add new pathes
  for (const pathId in pathes) {
    createPath({ cContext, path: pathes[pathId], cHeight, dt, pathes, pathId });
  }

  requestAnimationFrame(() => runFireworks(props));
};
