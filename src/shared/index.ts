export const extend = Object.assign;

export const isObject = (target) => {
    return typeof target === 'object' && target !== null;
}

export const hasChanged = (val, newVal) => {
    return !Object.is(val, newVal);
}