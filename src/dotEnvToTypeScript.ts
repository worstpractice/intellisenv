import { readFile } from 'fs/promises';
import { writeDeclarationFile } from './io/writeDeclarationFile.js';
import { generateCodeFrom } from './lib/generateCodeFrom.js';
import { parseLines } from './lib/parseLines.js';
import { splitIntoLines } from './lib/splitIntoLines.js';
import type { Options } from './typings/Options.js';
import type { ParseResult } from './typings/ParseResult.js';

const defaults: Options = {
  isDebug: false,
  isDryRun: true,
} as const;

export const dotEnvToTypeScript = async (readFrom: string, writeTo: string, { isDebug, isDryRun }: Options = defaults): Promise<void> => {
  ////////////////////////////////////////////////////////////////////////////////////////////////

  const path: string = readFrom.endsWith('.env') ? readFrom : `${readFrom}.env`;

  if (isDebug) console.log(path);

  ///////////////////////////////////////////////////////////////////////////////////////////////

  const text: string = (await readFile(path)).toString();

  if (isDebug) console.log(text);

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const lines: readonly string[] = splitIntoLines(text);

  if (isDebug) console.log(lines);

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const parseResult: ParseResult = parseLines(lines);

  if (isDebug) console.log(parseResult);

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const code: string = generateCodeFrom(parseResult);

  if (isDebug) console.log(code);

  ////////////////////////////////////////////////////////////////////////////////////////////////

  if (isDryRun) return;

  await writeDeclarationFile(writeTo, code);

  ////////////////////////////////////////////////////////////////////////////////////////////////
};
