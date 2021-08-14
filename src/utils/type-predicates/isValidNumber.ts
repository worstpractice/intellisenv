import { NUMBERS } from '../../data/NUMBERS.js';
import type { ValidNumber } from '../../typings/ValidNumber.js';

export const isValidNumber = (char: string): char is ValidNumber => {
  return NUMBERS.includes(char as ValidNumber);
};
