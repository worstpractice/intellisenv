import type { AssignmentStatement } from '../typings/AssignmentStatement.js';
export declare const splitOnFirstEqualsSign: (line: AssignmentStatement) => readonly [name: string, value: string];
