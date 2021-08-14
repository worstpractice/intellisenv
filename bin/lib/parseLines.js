import { pairsByName } from '../utils/sorting/pairsByName.js';
import { parseLine } from './parseLine.js';
export const parseLines = (lines) => {
    const pairs = lines.map(parseLine);
    pairs.sort(pairsByName);
    return Object.fromEntries(pairs);
};
