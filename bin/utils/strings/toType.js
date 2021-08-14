import { transformValue } from './transformValue.js';
export const toType = ([key, value]) => {
    return [key, transformValue(value)];
};
