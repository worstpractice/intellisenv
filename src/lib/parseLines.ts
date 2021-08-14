import type { ParseResult } from '../typings/ParseResult.js';
import { pairsByName } from '../utils/sorting/pairsByName.js';
import { parseLine } from './parseLine.js';

export const parseLines = (lines: readonly string[]): ParseResult => {
  const pairs: (readonly [name: string, value: string])[] = lines.map(parseLine);

  pairs.sort(pairsByName);

  return Object.fromEntries(pairs);
};
