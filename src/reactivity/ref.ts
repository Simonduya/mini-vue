import { hasChanged } from "../shared";
import { isTracking, trackEffects, triggerEffects } from "./effect";

class RefImpl {
  private _value: any;
  public dep;
  constructor(value) {
    this._value = value;
    this.dep = new Set();
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newValue) {
    // 必须先修改了value的值, 才去通知

    // newValue === this._value ? return
    if (hasChanged(newValue, this._value)) {
      this._value = newValue;
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
