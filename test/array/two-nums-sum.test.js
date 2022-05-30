import { findTwoNum1, findTwoNum2 } from "../../code/array/two-nums-sum";

describe("find two nums for sum", () => {
  const nums = [1, 4, 6, 8, 10, 12, 15, 18, 25];
  const sum = 20;

  test("should be [8, 12]", () => {
    expect(findTwoNum1(nums, sum)).toEqual([8, 12]);
    expect(findTwoNum2(nums, sum)).toEqual([8, 12]);
  });

  test("should be []", () => {
    expect(findTwoNum1(nums, 100)).toEqual([]);
    expect(findTwoNum1([])).toEqual([]);

    expect(findTwoNum2(nums, 100)).toEqual([]);
    expect(findTwoNum2([])).toEqual([]);
  });
});
