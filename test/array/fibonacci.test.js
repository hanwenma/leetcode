import { fibonacci1, fibonacci2, fibonacci3 } from "../../code/array/fibonacci";

describe("fibonacci", () => {
  const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

  test("fibonacci for k", () => {
      expect(fibonacci1(5)).toBe(5);
      expect(fibonacci2(5)).toBe(5);
      expect(fibonacci2(50)).toBe(12586269025);
      expect(fibonacci3(5)).toBe(5);
      expect(fibonacci3(3)).toBe(2);
  });
});
