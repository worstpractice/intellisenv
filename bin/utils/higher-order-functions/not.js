export const not = (fn) => {
    const innerNot = (arg) => {
        return !fn(arg);
    };
    return innerNot;
};
