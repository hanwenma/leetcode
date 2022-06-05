import { quickSort } from "../../code/array/quickSort";

describe("test quick sort", () => {
  test("should be [1, 2, 3, 3, 5, 6 , 8]", () => {
    const arr = [1, 3, 2, 5, 3, 8, 6];
    expect(quickSort(arr)).toEqual([1, 2, 3, 3, 5, 6 , 8]);
  });

  test("should be []", () => {
    const arr = [];
    expect(quickSort(arr)).toEqual([]);
  });

  test("should be [1, 2, 3, 3, 5, 6 , 8]", () => {
    const arr = [1, 2, 3, 3, 5, 6 , 8];
    expect(quickSort(arr)).toEqual([1, 2, 3, 3, 5, 6 , 8]);
  });
});
