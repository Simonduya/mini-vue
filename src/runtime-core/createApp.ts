import { createVNode } from "./vnode";

export function createAppAPI(render) {
  return function createApp(rootComponent) {
    return {
      mount(rootContainer) {
        // 先vnode
        // component -> vnode
        // 所有的逻辑操作都基于vnode进行
        const vnode = createVNode(rootComponent);
  
        render(vnode, rootContainer); 
      },
    };
  }
}


