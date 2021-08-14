import { argv } from 'process';
import { dotEnvToTypeScript } from './env2Ts.js';
import { toTrimmed } from './utils/strings/toTrimmed.js';

const args = new Set<string>(argv.slice(2).map(toTrimmed).filter(Boolean));

console.log(args);

dotEnvToTypeScript('.env', {
  isDebug: args.has('--debug'),
  isDryRun: args.has('--dry'),
});
