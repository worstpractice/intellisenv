export const toAssignment = <T extends string, U extends string>([key, value]: readonly [T, U]) => {
  return `${key}: \`${value}\`` as const;
};
