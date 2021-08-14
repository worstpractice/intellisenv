import type { PathOrFileDescriptor } from 'fs';

export type InputReader = (filePaths: PathOrFileDescriptor) => string;
