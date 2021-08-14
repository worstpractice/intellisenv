export const escapeAllQuotes = (str) => {
    return str.replaceAll(`"`, `\\"`).replaceAll(`'`, `\\'`);
};
