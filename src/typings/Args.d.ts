export type Args<T extends (...args: readonly any[]) => any> = Parameters<T>[0];
