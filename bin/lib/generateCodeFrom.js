import { DECLARATION_BEGINNING } from '../data/DECLARATION_BEGINNING.js';
import { DECLARATION_END } from '../data/DECLARATION_END.js';
import { addIndentation } from '../utils/strings/addIndentation.js';
import { addNewLine } from '../utils/strings/addNewLine.js';
import { addReadonly } from '../utils/strings/addReadonly.js';
import { addSemicolon } from '../utils/strings/addSemicolon.js';
import { toAssignment } from '../utils/strings/toAssignment.js';
export const generateCodeFrom = (parsed) => {
    const fields = Object.entries(parsed)
        .map(toAssignment)
        .map(addReadonly)
        .map(addIndentation)
        .map(addSemicolon)
        .map(addNewLine);
    const lines = [
        ...DECLARATION_BEGINNING,
        ...fields,
        ...DECLARATION_END,
    ];
    return lines.join('');
};
