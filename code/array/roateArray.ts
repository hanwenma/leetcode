
/*
方式一
  时间复杂度 O(n^2)
  空间复杂度 O(1)
*/
export const roateArray1 = (arr, k) => {
  if (arr.length === 0 || !k) return arr

  // O(n)
  for (let i = 0; i < k; i++) {
    let item = arr.pop();
    // O(n) : 数组是有序的，unshift、shift、splice 都属于慢操作
    arr.unshift(item);
  }

  return arr
}


/*
方式二
  时间复杂度 O(1)
  空间复杂度 O(n)
*/
export const roateArray2 = (arr, k) => {
  if (arr.length === 0 || !k) return arr

  // O(1) : slice 操作相当于复制操作，并不影响原数组
  return [...arr.slice(k - 1), ...arr.slice(0, k - 1)]
}