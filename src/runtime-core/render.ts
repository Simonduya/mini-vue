import { createComponentInstance, setupComponent } from "./component";

export function render(vnode, container) {
  // patch 方便递归处理

  patch(vnode, container);
}

function patch(vnode, container) {
  // 处理组件

  //   判断是不是element
  processComponent(vnode, container);
}

function processComponent(vnode: any, container: any) {
  mountComponent(vnode, container);
}

function mountComponent(vnode: any, container: any) {
  const instance = createComponentInstance(vnode);
  setupComponent(instance);

  setupRenderEffect(instance, container);
}

function setupRenderEffect(instance: any, container) {
  const subTree = instance.render();
  //vnode->patch
  // vnode -> element -> mountElement
  patch(subTree, container);
}
