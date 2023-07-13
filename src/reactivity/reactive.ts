import { track, trigger } from "./effect";

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

export function reactive(raw) {
  return new Proxy(raw, {
    get: createGetter(),
    set(target, key, value) {
      const res = Reflect.set(target, key, value);
      // TODO 触发依赖
      trigger(target, key);
      return res;
    },
  });
}

export function readonly(raw) {
  return new Proxy(raw, {
    get: createGetter(true),
    set(raw, key, value) {
      return true;
    },
  });
}
