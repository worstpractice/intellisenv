export const escapeAllQuotes = <T extends string>(str: T): string => {
  // prettier-ignore
  return str
    .split(`"`).join(`\\"`)
    .split(`'`).join(`\\'`);
};
