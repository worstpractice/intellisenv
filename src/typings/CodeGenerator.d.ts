import type { ParseResult } from './ParseResult';

export type CodeGenerator = (parseResult: ParseResult) => string;
