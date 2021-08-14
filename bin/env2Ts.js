import { readFileSync } from 'fs';
import { writeDeclarationFile } from './io/writeDeclarationFile.js';
import { generateCodeFrom } from './lib/generateCodeFrom.js';
import { parseLines } from './lib/parseLines.js';
import { splitIntoLines } from './lib/splitIntoLines.js';
const defaults = {
    isDebug: false,
    isDryRun: true,
};
export const dotEnvToTypeScript = (dotEnvPath, { isDebug, isDryRun } = defaults) => {
    const path = dotEnvPath.endsWith('.env') ? dotEnvPath : `${dotEnvPath}.env`;
    if (isDebug)
        console.log(path);
    const text = readFileSync(path).toString();
    if (isDebug)
        console.log(text);
    const lines = splitIntoLines(text);
    if (isDebug)
        console.log(lines);
    const parseResult = parseLines(lines);
    if (isDebug)
        console.log(parseResult);
    const code = generateCodeFrom(parseResult);
    if (isDebug)
        console.log(code);
    if (isDryRun)
        return;
    writeDeclarationFile(code);
};
