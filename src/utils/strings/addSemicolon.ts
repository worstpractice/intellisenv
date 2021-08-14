export const addSemicolon = <T extends string>(str: T): `${T};` => {
  return `${str};` as const;
};
