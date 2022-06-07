/**
 * 数字千分化（数字 -> 数组 -> 字符）
 * 时间复杂度：O(n)
 * @param num
 */
export function thousandsFormat1(num: number): string {
  let str = Math.floor(num).toString();
  let arr = str.split("").reverse();
  let length = arr.length;

  return arr.reduce((pre, curr, index) => {
    const value = curr + pre;
    if ((index + 1) % 3 === 0) {
      return index === length - 1 ? value : "," + value;
    } else {
      return value;
    }
  }, "");
}

/**
 * 数字千分化（数字 -> 字符）
 * 时间复杂度：O(n)
 * @param num
 */
export function thousandsFormat2(num: number): string {
  let str = Math.floor(num).toString();
  let length = str.length;
  let res = "";
  for (let i = length - 1; i >= 0; i--) {
    const len = length - i;
    const value = str[i] + res;
    if (len % 3 === 0) {
      res = i === 0 ? value : "," + value;
    } else {
      res = value;
    }
  }
  return res;
}