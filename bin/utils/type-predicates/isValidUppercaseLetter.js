import { UPPERCASE_LETTERS } from '../../data/UPPERCASE_LETTERS.js';
export const isValidUppercaseLetter = (char) => {
    if (!char)
        return false;
    return UPPERCASE_LETTERS.includes(char);
};
