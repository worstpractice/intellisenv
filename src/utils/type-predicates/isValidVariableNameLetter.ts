import { VARIABLE_NAME_LETTERS } from '../../constants/input/VARIABLE_NAME_LETTERS.js';
import type { ValidVariableNameLetter } from '../../typings/ValidVariableNameLetter.js';

export const isValidVariableNameLetter = (char: string): char is ValidVariableNameLetter => {
  return VARIABLE_NAME_LETTERS.includes(char as ValidVariableNameLetter);
};
