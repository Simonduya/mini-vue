import { hasChanged, isObject } from "../shared";
import { isTracking, trackEffects, triggerEffects } from "./effect";
import { reactive } from "./reactive";

class RefImpl {
  private _value: any;
  private _rawValue: any;
  public dep;
  public _v_is_Ref = true;
  constructor(value) {
    this._rawValue = value;
    //看看value是否为对象
    this._value = convert(value);
    this.dep = new Set();
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newValue) {
    // 必须先修改了value的值, 才去通知

    // newValue === this._value ? return
    //不能直接判断hasChanged(newValue, this._value)
    //因为value可能是一个proxy和一个普通对象进行比较
    if (hasChanged(newValue, this._rawValue)) {
      // this._value = newValue;
      this._rawValue = newValue;
      //看看value是否为对象
      this._value = convert(newValue);
      triggerEffects(this.dep);
    }
  }
}

export function ref(value) {
  return new RefImpl(value);
}

function trackRefValue(ref) {
  if (isTracking()) {
    trackEffects(ref.dep);
  }
}

function convert(value) {
  return isObject(value) ? reactive(value) : value;
}

export function isRef(ref) {
  return !!ref._v_is_Ref;
}

export function unRef(ref) {
  return isRef(ref) ? ref.value : ref;
}

export function proxyRefs(objectWithRefs) {
  return new Proxy(objectWithRefs, {
    get(target, key) {
      return unRef(Reflect.get(target, key));
    },
    set(target, key, newValue) {
      if (isRef(target[key]) && !isRef(newValue)) {
        return (target[key].value = newValue);
      } else {
        return Reflect.set(target, key, newValue);
      }
    },
  });
}
