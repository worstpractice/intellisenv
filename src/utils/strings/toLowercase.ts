export const toLowercase = <T extends string>(str: T): Lowercase<T> => {
  return str.toLowerCase() as Lowercase<T>;
};
