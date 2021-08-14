import { transformValue } from './transformValue.js';

export const toType = <T extends string, U extends string>([key, value]: readonly [T, U]): readonly [T, U] => {
  return [key, transformValue(value)] as const;
};
