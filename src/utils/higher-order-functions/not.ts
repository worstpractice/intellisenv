import type { Predicate } from '../../typings/Predicate.js';

export const not = <T extends Predicate>(fn: T) => {
  const innerNot = (arg: Parameters<T>[0]) => {
    return !fn(arg);
  };

  return innerNot;
};
