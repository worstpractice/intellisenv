import { readFileSync } from 'fs';
export const readInput = (filePath) => {
    return readFileSync(filePath).toString();
};
