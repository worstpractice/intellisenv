import type { ParseResult } from './ParseResult';

export type Tokenizer = (lines: readonly string[]) => ParseResult;
