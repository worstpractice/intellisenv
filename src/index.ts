import { argv, cwd } from 'process';
import { dotEnvToTypeScript } from './env2Ts.js';
import type { ReadFrom } from './typings/ReadFrom.js';
import type { WriteTo } from './typings/WriteTo.js';
import { toTrimmed } from './utils/strings/toTrimmed.js';

const PROJECT_ROOT = cwd();

const readFrom: ReadFrom = `${PROJECT_ROOT}\\.env` as const;
const writeTo: WriteTo = `${PROJECT_ROOT}\\.env.d.ts` as const;

const flags = new Set(argv.slice(2).map(toTrimmed).filter(Boolean));

dotEnvToTypeScript(readFrom, writeTo, {
  isDebug: flags.has('--debug'),
  isDryRun: flags.has('--dry'),
});
