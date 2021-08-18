import { argv, cwd } from 'process';
import { dotEnvToTypeScript } from './env2Ts.js';
import { toTrimmed } from './utils/strings/toTrimmed.js';
console.clear();
const PROJECT_ROOT = cwd();
const readFrom = `${PROJECT_ROOT}\\.env`;
const writeTo = `${PROJECT_ROOT}\\.env.d.ts`;
const flags = new Set(argv.slice(2).map(toTrimmed).filter(Boolean));
dotEnvToTypeScript(readFrom, writeTo, {
    isDebug: flags.has('--debug'),
    isDryRun: flags.has('--dry'),
});
