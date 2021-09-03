import type { WriteFileOptions } from 'fs';

export const WRITE_OPTIONS: WriteFileOptions = {
  flag: 'a', // appends
} as const;
