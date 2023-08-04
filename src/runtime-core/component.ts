export function createComponentInstance(vnode) {
  const component = {
    vnode,
    type: vnode.type,
    setupState: {},
  };
  return component;
}

export function setupComponent(instance) {
  // TODO
  // initProps()
  // initSlots()
  setupStatefulComponent(instance);
}

function setupStatefulComponent(instance: any) {
  const Component = instance.type;

  instance.proxy = new Proxy(
    {},
    {
      get(target, key) {
        // 从setupState中获取值
        const { setupState } = instance;        
        if (key in setupState) {
          return setupState[key];
        }        
      },
    }
  );

  const { setup } = Component;
  
  if (setup) {
    // function object
    const setupResult = setup();

    handleSetupResult(instance, setupResult);
  }
}

function handleSetupResult(instance, setupResult: any) {
  // function object
  // TODO funtion
  if (typeof setupResult === "object") {
    instance.setupState = setupResult;    
  }

  finishComponentSetup(instance);
}

function finishComponentSetup(instance: any) {
  const Component = instance.type;

  instance.render = Component.render;
}
