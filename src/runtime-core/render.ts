import { isObject } from "../shared/index";
import { createComponentInstance, setupComponent } from "./component";

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
  console.log(vnode.type);
  if (typeof vnode.type === "string") {
    processElenet(vnode, container);
  } else if (isObject(vnode.type)) {
    processComponent(vnode, container);
  }
}

function processElenet(vnode: any, container: any) {
  mountElement(vnode, container);
}

function mountElement(vnode, container) {
  const el = document.createElement(vnode.type);
  const { children } = vnode;
  if (typeof children === "string") {
    el.textContent = children;
  } else if (Array.isArray(children)) {
    mountChildren(vnode, el);
  }

  const { props } = vnode;
  for (const key in props) {
    const val = props[key];
    el.setAttribute(key, val);
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

function mountComponent(vnode: any, container: any) {
  const instance = createComponentInstance(vnode);
  setupComponent(instance);

  setupRenderEffect(instance, container);
}

function setupRenderEffect(instance: any, container) {
  const { proxy } = instance;
  console.log(proxy, 'proxy');
  
  const subTree = instance.render.call(proxy);
  //vnode->patch
  // vnode -> element -> mountElement
  patch(subTree, container);
}
