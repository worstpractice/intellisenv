import type { Options } from './typings/Options.js';
import type { ReadFrom } from './typings/ReadFrom.js';
import type { WriteTo } from './typings/WriteTo.js';
export declare const dotEnvToTypeScript: (readFrom: ReadFrom, writeTo: WriteTo, { isDebug, isDryRun }?: Options) => void;
