import type { AssignmentStatement } from '../typings/AssignmentStatement.js';
import { toTrimmed } from './strings/toTrimmed.js';

export const splitOnFirstEqualsSign = (line: AssignmentStatement): readonly [name: string, value: string] => {
  return line.split(`=`).map(toTrimmed) as [name: string, value: string] as readonly [name: string, value: string];
};
