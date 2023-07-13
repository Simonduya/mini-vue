import { isReadOnly, shallowReadonly } from "../reactive";

describe("shallowReadonly", () => {
  test("only first flat is reactive", () => {
    const props = shallowReadonly({ n: { foo: 1 } });
    expect(isReadOnly(props)).toBe(true);
    expect(isReadOnly(props.n)).toBe(false);
  });
  it("warn when call set", () => {
    // console.warn();
    // mock
    console.warn = jest.fn();
    
    const user = shallowReadonly({
        age: 10
    })
    user.age = 11;

    expect(console.warn).toBeCalled()
})  
});
