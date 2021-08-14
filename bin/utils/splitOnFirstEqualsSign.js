import { toTrimmed } from './strings/toTrimmed.js';
export const splitOnFirstEqualsSign = (line) => {
    return line.split(`=`).map(toTrimmed);
};
