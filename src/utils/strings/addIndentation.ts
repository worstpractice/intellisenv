export const addIndentation = <T extends string>(str: T): `    ${T}` => {
  return `    ${str}` as const;
};
