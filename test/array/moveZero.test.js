import { moveZero1, moveZero2 } from "../../code/array/moveZero";

describe("test moveZero1", () => {

  test("should be [1, 2, 3, 4, 0, 0, 0]", () => {
    const arr = [1, 2, 0, 0, 3, 4, 0];
    moveZero1(arr);
    expect(arr).toEqual([1, 2, 3, 4, 0, 0, 0]);
  });

  test("should be [1, 2, 1, 1, 3, 4, 3]", () => {
    const arr = [1, 2, 1, 1, 3, 4, 3];
    moveZero1(arr);
    expect(arr).toEqual([1, 2, 1, 1, 3, 4, 3]);
  });

  test("should be [0, 0, 0, 0, 0]", () => {
    const arr = [0, 0, 0, 0, 0];
    moveZero1(arr);
    expect(arr).toEqual([0, 0, 0, 0, 0]);
  });

});

describe("test moveZero2", () => {

  test("should be [1, 2, 3, 4, 0, 0, 0]", () => {
    const arr = [1, 2, 0, 0, 3, 4, 0];
    moveZero2(arr);
    expect(arr).toEqual([1, 2, 3, 4, 0, 0, 0]);
  });

  test("should be [1, 2, 1, 1, 3, 4, 3]", () => {
    const arr = [1, 2, 1, 1, 3, 4, 3];
    moveZero2(arr);
    expect(arr).toEqual([1, 2, 1, 1, 3, 4, 3]);
  });

  test("should be [0, 0, 0, 0, 0]", () => {
    const arr = [0, 0, 0, 0, 0];
    moveZero2(arr);
    expect(arr).toEqual([0, 0, 0, 0, 0]);
  });

});