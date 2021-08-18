import type { RmOptions, WriteFileOptions } from 'fs';
import { rmSync, writeFileSync } from 'fs';

const RM_OPTIONS: RmOptions = {
  force: true,
} as const;

const WRITE_OPTIONS: WriteFileOptions = {
  flag: 'a', // appends
} as const;

let isDebounced = false;

export const writeDeclarationFile = <T extends `${string}.d.ts`>(writeToPath: T, moduleAugmentation: string): boolean => {
  if (!isDebounced) {
    rmSync(writeToPath, RM_OPTIONS);
    isDebounced = true;
  }

  let isError = false;

  try {
    writeFileSync(writeToPath, moduleAugmentation, WRITE_OPTIONS);
  } catch (error: unknown) {
    isError = Boolean(error);
  }

  return isError;
};
