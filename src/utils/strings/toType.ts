export const toType = <T extends string, U extends string>([key]: readonly [T, U]): readonly [T, U] => {
  return [key, 'string' as U] as const;
};
