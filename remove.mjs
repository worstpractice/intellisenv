import { rm, rmdir } from 'fs/promises';

export const remove = rm || rmdir;
