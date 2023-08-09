import { isObject } from "../shared/index";
import { ShapeFlags } from "./ShapeFlags";
import { createComponentInstance, setupComponent } from "./component";
import { Fragment } from "./vnode";

export function render(vnode, container) {
  // patch 方便递归处理

  patch(vnode, container);
}

function patch(vnode, container) {
  // debugger;
  // 处理组件
  // TODO 判断vnode是不是一个element
  // 思考: 如何区分是element还是component类型
  // element type: div
  // component type: component
  // processElement();
  //   判断是不是element
  const { shapeFlag, type } = vnode;
  
  switch(type) {
    case Fragment:
      processFragment(vnode, container);
      break;

    default:
      if (shapeFlag & ShapeFlags.ELEMENT) {
        processElenet(vnode, container);
      } else if (shapeFlag & ShapeFlags.STATEFUL_COMPONENT) {
        processComponent(vnode, container);
      }
      break;
  }
}

function processFragment(vnode: any, container: any) {
  mountChildren(vnode, container);
}

function processElenet(vnode: any, container: any) {
  mountElement(vnode, container);
}

function mountElement(vnode, container) {
  const el = (vnode.el = document.createElement(vnode.type));
  const { children, shapeFlag } = vnode;
  if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
    el.textContent = children;
  } else if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
    mountChildren(vnode, el);
  }

  const { props } = vnode;
  for (const key in props) {
    const val = props[key];
    const isOn = (key: string) => /^on[A-Z]/.test(key);
    if (isOn(key)) {
      const event = key.slice(2).toLocaleLowerCase();
      el.addEventListener(event, val);
    } else {
      el.setAttribute(key, val);
    }
  }
  container.append(el);
}

function processComponent(vnode: any, container: any) {
  mountComponent(vnode, container);
}

function mountChildren(vnode, container) {
  vnode.children.forEach((v) => {
    patch(v, container);
  });
}

function mountComponent(initialVNode: any, container: any) {
  const instance = createComponentInstance(initialVNode);
  setupComponent(instance);

  setupRenderEffect(instance, initialVNode, container);
}

function setupRenderEffect(instance: any, initialVNode, container) {
  const { proxy } = instance;
  console.log(proxy, "proxy");

  const subTree = instance.render.call(proxy);
  //vnode->patch
  // vnode -> element -> mountElement
  patch(subTree, container);

  initialVNode.el = subTree.el;
}
