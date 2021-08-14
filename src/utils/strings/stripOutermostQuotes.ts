export const stripOutermostQuotes = <T extends string>(str: T): string => {
  const isSingleQuoted = str.startsWith(`'`) && str.endsWith(`'`);
  const isDoubleQuoted = str.startsWith(`"`) && str.endsWith(`"`);

  const isQuoted = isSingleQuoted || isDoubleQuoted;

  return isQuoted ? str.slice(1, -1) : str;
};
