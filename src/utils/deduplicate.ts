export const deduplicate = <T>(input: Iterable<T>): readonly T[] => {
  return [...new Set(input)] as const;
};
