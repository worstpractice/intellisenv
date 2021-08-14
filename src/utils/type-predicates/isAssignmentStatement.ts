import type { AssignmentStatement } from '../../typings/AssignmentStatement.js';

export const isAssignmentStatement = (line: string): line is AssignmentStatement => {
  return line.includes(`=` as const);
};
