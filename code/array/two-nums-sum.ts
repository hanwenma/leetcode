/**
 * 查找两数之和（嵌套循环）
 * @param nums
 * @param sum
 */
export function findTwoNum1(nums: number[], sum: number): number[] {
  const length = nums.length;
  if (length === 0) return [];

  const res: number[] = [];

  // 时间复杂度为 O(n^2)
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const n1 = nums[i];
      const n2 = nums[j];

      if (n1 + n2 === sum) {
        res.push(n1, n2);
        return res;
      }
    }
  }

  return res;
}

/**
 * 查找两数之和（双指针）
 * @param nums
 * @param sum
 */
export function findTwoNum2(nums: number[], sum: number): number[] {
  const length = nums.length;
  if (length === 0) return [];

  const res: number[] = [];

  // 开始位置
  let i = 0;
  // 结束位置
  let j = length - 1;

  while (i < j) {
    const n1 = nums[i];
    const n2 = nums[j];
    const currSum = n1 + n2;

    // 当前和大于目标和，需要往前查找
    if (currSum > sum) {
      j--;
    } else if (currSum < sum) {
      // 当前和大于目标和，需要往后查找
      i++;
    } else {
      // 否则当前和等于目标和
      res.push(n1, n2);
      break;
    }
  }
  
  return res;
}
