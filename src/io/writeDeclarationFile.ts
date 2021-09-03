import { rm, writeFile } from 'fs/promises';
import { RM_OPTIONS } from '../constants/RM_OPTIONS';
import { WRITE_OPTIONS } from '../constants/WRITE_OPTIONS';

export const writeDeclarationFile = async (writeToPath: string, moduleAugmentation: string): Promise<void> => {
  await rm(writeToPath, RM_OPTIONS);

  await writeFile(writeToPath, moduleAugmentation, WRITE_OPTIONS);
};
