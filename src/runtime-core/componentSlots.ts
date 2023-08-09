import { ShapeFlags } from "./ShapeFlags";

export function initSlots(instance, children) {
  // instance.slots = Array.isArray(children) ? children : [children];
  // console.log("instanceSlots", instance.slots);
  const { vnode } = instance;
  if (vnode.shapeFlag & ShapeFlags.SLOT_CHILDREN) {
    normalizeObjectSlots(children, instance.slots);
  }
  
}

function normalizeObjectSlots(children: any, slots: any) {
  for (const key in children) {
    const value = children[key];

    slots[key] = (props) => normalizeSlotValue(value(props));
  }
  console.log(slots);
}

function normalizeSlotValue(value) {
  return Array.isArray(value) ? value : [value];
}
