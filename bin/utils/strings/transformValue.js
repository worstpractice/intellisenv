import { isValidNumber } from '../type-predicates/isValidNumber.js';
export const transformValue = (value) => {
    if (!value.length)
        return value;
    const isNumeric = value.split('').every(isValidNumber);
    if (isNumeric)
        return '${number}';
    const isYesOrNo = value === 'yes' || value === 'no';
    if (isYesOrNo)
        return 'yes` | `no';
    return value;
};
