export const extend = Object.assign;

export const EMPTY_OBJ = {}

export const isObject = (target) => {
    return typeof target === 'object' && target !== null;
}

export const hasChanged = (val, newVal) => {
    return !Object.is(val, newVal);
}

export const hasOwn = (val, key) => Object.hasOwnProperty.call(val, key);

export const camelize = (str: string) => {
    return str.replace(/-(\w)/g, (_, c: string) => {
      return c ? c.toUpperCase() : "";
    });
  };

  // const handler = props["onAdd"];
export  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

export  const toHandlerKey = (str: string) => {
    return str ? "on" + capitalize(str) : "";
  };