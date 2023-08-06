export const extend = Object.assign;

export const isObject = (target) => {
    return typeof target === 'object' && target !== null;
}

export const hasChanged = (val, newVal) => {
    return !Object.is(val, newVal);
}

export const hasOwn = (val, key) => Object.hasOwnProperty.call(val, key);
