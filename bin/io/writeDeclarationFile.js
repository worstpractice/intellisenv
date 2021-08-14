import { rmSync, writeFileSync } from 'fs';
const RM_OPTIONS = {
    force: true,
};
const WRITE_OPTIONS = {
    flag: 'a',
};
const OUTPUT_PATH = 'src/env.d.ts';
let isDebounced = false;
export const writeDeclarationFile = (moduleAugmentation) => {
    if (!isDebounced) {
        rmSync(OUTPUT_PATH, RM_OPTIONS);
        isDebounced = true;
    }
    let isError = false;
    try {
        writeFileSync(OUTPUT_PATH, moduleAugmentation, WRITE_OPTIONS);
    }
    catch (error) {
        isError = Boolean(error);
    }
    return isError;
};
