import type { CodeGenerator } from './CodeGenerator';
import type { Lexer } from './Lexer';
import type { Tokenizer } from './Tokenizer';

export type CreateParserConfig<L extends Lexer, T extends Tokenizer, C extends CodeGenerator> = {
  readonly stages: readonly [
    //
    lexer: L,
    tokenizer: T,
    codeGenerator: C,
  ];
};
