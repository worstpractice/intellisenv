export const escapeAllQuotes = <T extends string>(str: T): string => {
  return str.replaceAll(`"`, `\\"`).replaceAll(`'`, `\\'`);
};
