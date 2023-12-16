import { getRefValue } from "./helpers";

describe("getRefValue()", () => {
  it("예상되는 값이 반환돼야 함", () => {
    const node = "node";
    const ref = { current: node };

    expect(getRefValue(ref)).toBe(node);
  });
});
