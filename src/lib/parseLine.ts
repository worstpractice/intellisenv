import { splitOnFirstEqualsSign } from '../utils/splitOnFirstEqualsSign.js';
import { escapeAllQuotes } from '../utils/strings/escapeAllQuotes.js';
import { stripOutermostQuotes } from '../utils/strings/stripOutermostQuotes.js';
import { isAssignmentStatement } from '../utils/type-predicates/isAssignmentStatement.js';
import { validateVariableName } from './validateVariableName.js';

export const parseLine = (line: string, i: number): readonly [name: string, value: string] => {
  if (!isAssignmentStatement(line)) {
    throw new TypeError(`${i + 1}: Line must include atleast one (1) equals sign!`);
  }

  const pair = splitOnFirstEqualsSign(line);

  const [name, dirtyValue] = pair;

  validateVariableName(name, i);

  const value = escapeAllQuotes(stripOutermostQuotes(dirtyValue));

  return [name, value] as const;
};
