import { rmSync, writeFileSync } from 'fs';
const RM_OPTIONS = {
    force: true,
};
const WRITE_OPTIONS = {
    flag: 'a',
};
let isDebounced = false;
export const writeDeclarationFile = (writeToPath, moduleAugmentation) => {
    if (!isDebounced) {
        rmSync(writeToPath, RM_OPTIONS);
        isDebounced = true;
    }
    let isError = false;
    try {
        writeFileSync(writeToPath, moduleAugmentation, WRITE_OPTIONS);
    }
    catch (error) {
        isError = Boolean(error);
    }
    return isError;
};
