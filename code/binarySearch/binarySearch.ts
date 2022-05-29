
/**
 * 二分查找（while 循环）
 * @param list 
 * @returns number
 */
export function binarySearchWithLoop(list: number[], target: number): number {
  const len = list.length;
  if (len == 0) return -1

  let startIndex = 0;
  let endIndex = len - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((endIndex + startIndex) / 2);
    const minddleValue = list[middleIndex];

    // 中间值 > 目标值，往左查找
    if (minddleValue > target) {
      endIndex = middleIndex - 1;
    } else if (minddleValue < target) {
      // 中间值 < 目标值，往右查找
      startIndex = middleIndex + 1;
    } else {
      // 否者 中间值 = 目标值，向外返回对应索引
      return middleIndex;
    }
  }

  return -1;
}



/**
 * 二分查找（递归）
 * @param list 
 * @param target 
 */
export function binarySearchWithRecursion(list: number[], target: number, startIndex?: number, endIndex?: number): number {
  if (startIndex === undefined) startIndex = 0;
  if (endIndex === undefined) endIndex = list.length - 1;

  if (startIndex > endIndex) return - 1;

  let middleIndex = Math.floor((endIndex + startIndex) / 2);
  let minddleValue = list[middleIndex];

  // 中间值 > 目标值，往左查找
  if (minddleValue > target) {
    return binarySearchWithRecursion(list, target, startIndex, middleIndex - 1);
  } else if (minddleValue < target) {
    // 中间值 < 目标值，往右查找
    return binarySearchWithRecursion(list, target, middleIndex + 1, endIndex);
  } else {
    // 否者 中间值 = 目标值，向外返回对应索引
    return middleIndex;
  }
}