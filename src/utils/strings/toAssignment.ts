export const toAssignment = <T extends string, U extends string>([key]: readonly [T, U]) => {
  return `${key}: string` as const;
};
