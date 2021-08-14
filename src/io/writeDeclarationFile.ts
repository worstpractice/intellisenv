import type { RmOptions, WriteFileOptions } from 'fs';
import { rmSync, writeFileSync } from 'fs';

const RM_OPTIONS: RmOptions = {
  force: true,
} as const;

const WRITE_OPTIONS: WriteFileOptions = {
  flag: 'a', // appends
} as const;

const OUTPUT_PATH = 'src/env.d.ts';

let isDebounced = false;

export const writeDeclarationFile = (moduleAugmentation: string): boolean => {
  if (!isDebounced) {
    rmSync(OUTPUT_PATH, RM_OPTIONS);
    isDebounced = true;
  }

  let isError = false;

  try {
    writeFileSync(OUTPUT_PATH, moduleAugmentation, WRITE_OPTIONS);
  } catch (error: unknown) {
    isError = Boolean(error);
  }

  return isError;
};
