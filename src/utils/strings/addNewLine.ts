export const addNewLine = <T extends string>(str: T): `${T}\n` => {
  return `${str}\n` as const;
};
