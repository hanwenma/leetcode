/**
 * 移动 0 的元素到原数组末尾
 * 时间复杂度：O(n^2)
 * @param arr
 */
export function moveZero1(arr: number[]): void {
  let length = arr.length;
  if(length === 0 || length === 1) return;

  let zeroCount = 0;

  // 时间复杂度 O(n)
  for (let i = 0; i < length - zeroCount; i++) {
    if(arr[i] === 0){
      arr.push(arr[i]);// 将其添加到原数组的末尾
      // 时间复杂度 O(n)
      arr.splice(i, 1);// 从原数组中删除为 0 的元素
      i--; // 为了处理有连续为 0 的情况
      zeroCount++;
    }
  }
}

/**
 * 移动 0 的元素到原数组末尾
 * 时间复杂度：O(n)
 * @param n
 */
export function moveZero2(arr: number[]): void {
  let length = arr.length;
  if(length === 0 || length === 1) return;

  let i;// 指向非 0 元素索引
  let j = -1;// 指向 0 元素的索引
  for (i = 0; i < length; i++) {
    if(arr[i] == 0 && j == -1){
      j = i;
    }else if(arr[i] !== 0 && j >= 0){
      const n = arr[i];
      arr[i] = arr[j];
      arr[j] = n;
      j++;
    }
  }
}