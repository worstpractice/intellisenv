import { isValidNumber } from '../type-predicates/isValidNumber.js';

export const transformValue = <T extends string>(value: T): T => {
  if (!value.length) return value;

  ////////////////////////////////////////////////////////////////

  const isNumeric = value.split('').every(isValidNumber);

  if (isNumeric) return '${number}' as T;

  ////////////////////////////////////////////////////////////////

  const isYesOrNo = value === 'yes' || value === 'no';

  if (isYesOrNo) return 'yes` | `no' as T;

  ////////////////////////////////////////////////////////////////
  return value;
};
