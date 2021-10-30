import { join } from 'path';
import { argv, on } from 'process';
import { PROJECT_ROOT } from './constants/PROJECT_ROOT.js';
import { dotEnvToTypeScript } from './dotEnvToTypeScript.js';
import { toTrimmed } from './utils/strings/toTrimmed.js';

on('unhandledRejection', console.error);

const readFrom = join(PROJECT_ROOT, '.env');
const writeTo = join(PROJECT_ROOT, '.env.d.ts');

const flags = new Set(argv.slice(2).map(toTrimmed).filter(Boolean));

void dotEnvToTypeScript(readFrom, writeTo, {
  isDebug: flags.has('--debug'),
  isDryRun: flags.has('--dry'),
});
