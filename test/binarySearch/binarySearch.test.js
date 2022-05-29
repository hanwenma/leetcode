import { binarySearchWithLoop, binarySearchWithRecursion } from '../../code/binarySearch/binarySearch'

describe('binary search with loop', () => {
  const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
  test('should be 21', () => {
    expect(binarySearchWithLoop(list, 110)).toBe(10)
  });
});

describe('binary search with recursion', () => {
  const list = [10, 20, 30, 40, 50, 60]
  test('should be 1', () => {
    expect(binarySearchWithRecursion(list, 60)).toBe(5)
  });
});