import { VARIABLE_NAME_LETTERS } from '../../data/VARIABLE_NAME_LETTERS.js';
export const isValidVariableNameLetter = (char) => {
    return VARIABLE_NAME_LETTERS.includes(char);
};
