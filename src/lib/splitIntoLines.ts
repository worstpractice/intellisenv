import { excludeComments } from '../utils/excludeComments.js';
import { toTrimmed } from '../utils/strings/toTrimmed.js';

export const splitIntoLines = (text: string): readonly string[] => {
  return (
    text
      //
      .trim()
      .split(`\n`)
      .map(toTrimmed)
      .filter(Boolean)
      .filter(excludeComments)
  );
};
