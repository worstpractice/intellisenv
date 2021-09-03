import { DECLARATION_BEGINNING } from '../constants/output/DECLARATION_BEGINNING.js';
import { DECLARATION_END } from '../constants/output/DECLARATION_END.js';
import type { InterfaceField } from '../typings/InterfaceField.js';
import type { ParseResult } from '../typings/ParseResult.js';
import { addIndentation } from '../utils/strings/addIndentation.js';
import { addNewLine } from '../utils/strings/addNewLine.js';
import { addReadonly } from '../utils/strings/addReadonly.js';
import { addSemicolon } from '../utils/strings/addSemicolon.js';
import { toAssignment } from '../utils/strings/toAssignment.js';

export const generateCodeFrom = (parsed: ParseResult): string => {
  const fields: readonly InterfaceField[] = Object.entries(parsed)
    //
    .map(toAssignment)
    .map(addReadonly)
    .map(addIndentation)
    .map(addSemicolon)
    .map(addNewLine);

  const lines = [
    //
    ...DECLARATION_BEGINNING,
    ...fields,
    ...DECLARATION_END,
  ] as const;

  return lines.join('');
};
