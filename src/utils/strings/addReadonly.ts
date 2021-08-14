export const addReadonly = <T extends string>(str: T): `readonly ${T}` => {
  return `readonly ${str}` as const;
};
