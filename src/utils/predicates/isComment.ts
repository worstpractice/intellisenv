export const isComment = (str: string) => {
  return str.startsWith(`#` as const);
};
