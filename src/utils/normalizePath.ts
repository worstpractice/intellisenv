import path, { win32 } from 'path';
import { platform } from 'process';

const normalize = platform === 'win32' ? path.normalize : win32.normalize;

export const normalizePath = (path: string): string => {
  return normalize(path);
};
