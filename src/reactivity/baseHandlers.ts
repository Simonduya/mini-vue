import { track, trigger } from "./effect";

const get = createGetter();
const set = createSetter();
const readonlyGet = createGetter(true);


function createGetter(isReadOnly = false) {
    return function get(target, key) {
      const res = Reflect.get(target, key);
      // TODO 收集依赖
      if (!isReadOnly) {
        track(target, key);
      }
      return res;
    };
  }
  
  function createSetter() {
    return function set(target, key, value) {
      const res = Reflect.set(target, key, value);
      // TODO 触发依赖
      trigger(target, key);
      return res;
    };
  }

  export const mutableHandlers = {
    get,
    set
  }

  export const readonlyHandlers = {
    get: readonlyGet,
    set(target, key, value) {
        console.warn(`key:${key} set false, because target is readonly`, target);
        return true;
    }
  }