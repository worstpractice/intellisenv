import { readFileSync } from 'fs';

export const readInput = (filePath: string): string => {
  return readFileSync(filePath).toString();
};
