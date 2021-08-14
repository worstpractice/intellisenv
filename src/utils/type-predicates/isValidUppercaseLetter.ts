import { UPPERCASE_LETTERS } from '../../data/UPPERCASE_LETTERS.js';
import type { ValidUppercaseLetter } from '../../typings/ValidUppercaseLetter.js';

export const isValidUppercaseLetter = (char: string | undefined): char is ValidUppercaseLetter => {
  if (!char) return false;

  return UPPERCASE_LETTERS.includes(char as ValidUppercaseLetter);
};
