import { roateArray1, roateArray2 } from "../../code/array/roateArray";

test("roate array", () => {
  const target = [1, 2, 3, 4, 5];
  const step = 3;
  const result = [3, 4, 5, 1, 2];

  expect(roateArray1(Array.from(target), 3)).toEqual(result);
  expect(roateArray2(Array.from(target), 3)).toEqual(result);
});