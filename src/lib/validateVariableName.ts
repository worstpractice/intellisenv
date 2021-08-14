import { isValidUppercaseLetter } from '../utils/type-predicates/isValidUppercaseLetter.js';
import { isValidVariableNameLetter } from '../utils/type-predicates/isValidVariableNameLetter.js';

export const validateVariableName = (name: string, i: number): void => {
  const [firstChar, ...restOfName] = name[0] ?? '';

  if (!isValidUppercaseLetter(firstChar)) {
    throw new TypeError(`${i + 1}: Environment variable name must begin with an uppercase ASCII letter (A-Z)!`);
  }

  for (const [j, char] of restOfName.entries()) {
    if (!isValidVariableNameLetter(char)) {
      throw new TypeError(`${i + 1}:${j + 1}: Environment variable names can only include valid uppercase letters (A-Z) and underscores (_)!`);
    }
  }
};
