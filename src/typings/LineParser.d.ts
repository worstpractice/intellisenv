import type { ParseResult } from './ParseResult';

export type LineParser = (lines: readonly string[]) => ParseResult;
