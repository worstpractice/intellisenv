export const pairsByName = <T extends readonly [name: string, value: string]>([a]: T, [b]: T) => {
  return a > b ? 1 : b > a ? -1 : 0;
};
