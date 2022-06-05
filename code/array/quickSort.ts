/**
 * 快速排序（循环 + 二分）
 * 时间复杂度：O(nlog)
 * @param arr
 */
export function quickSort(arr: number[]): number[] {
  const length = arr.length;
  if (length === 0 || length === 1) return arr;

  // 二分查找，时间复杂度为：O(logn)   
  let middleIndex = Math.floor(length / 2);
  let middleValue = arr[middleIndex];
  const left: number[] = [];
  const right: number[] = [];

  // 时间复杂度：O(n)   
  for (let i = 0; i < length; i++) {
    if (middleIndex !== i) {
      if (middleValue < arr[i]) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
  }

  return quickSort(left).concat([middleValue], quickSort(right));
}
