export const extend = Object.assign;

export const isObject = (target) => {
    return typeof target === 'object' && target !== null;
}