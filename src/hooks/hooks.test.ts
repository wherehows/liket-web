import { renderHook, act } from "@testing-library/react";
import { simpleFaker } from "@faker-js/faker";
import useStateRef from "./useRefState";

describe("useStateRef()", () => {
  it("예상되는 반환돼야 함", () => {
    const initialValue = simpleFaker.string.uuid();
    const view = renderHook(() => useStateRef(initialValue));
    const [state, setState, ref] = view.result.current;

    expect(state).toBe(initialValue);
    expect(typeof setState).toBe("function");
    expect(ref).toEqual({ current: initialValue });
  });

  it("state와 ref가 올바르게 업데이트 돼야 함", () => {
    const initialValue = simpleFaker.string.uuid();
    const newValue = simpleFaker.string.uuid();
    const view = renderHook(() => useStateRef(initialValue));
    const [_state, setState] = view.result.current;

    act(() => {
      setState(newValue);
    });

    const [state, _setState, ref] = view.result.current;

    expect(state).toBe(newValue);
    expect(ref).toEqual({ current: newValue });
  });
});
