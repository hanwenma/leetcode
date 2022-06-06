/**
 * 找出 max 中所有的回文数（对称数）
 * 数字 -> 字符 -> 数组 -> 反转 -> 字符
 * @param max
 */
export function palindromeNumber1(max: number): number[] {
  const result = [];
  if (max <= 0) return result;

  for (let i = 0; i < max; i++) {
    let str = i.toString();
    let rev = str.split("").reverse().join("");
    if (str === rev) result.push(i);
  }

  return result;
}

/**
 * 找出 max 中所有的回文数（对称数）
 * 数字 -> 字符 -> 判断字符前后是否相等
 * @param max
 */
export function palindromeNumber2(max: number): number[] {
  const result = [];
  if (max <= 0) return result;

  for (let i = 0; i < max; i++) {
    let str = i.toString();
    let start = 0;
    let end = str.length - 1;
    let flag = true;

    while (start < end) {
      if (str[start] !== str[end]) {
        flag = false;
        break;
      } else {
        start++;
        end--;
      }
    }

    if (flag) result.push(i);
  }

  return result;
}

/**
 * 找出 max 中所有的回文数（对称数）
 * 数字 -> 计算得到反转数字
 * @param max
 */
export function palindromeNumber3(max: number): number[] {
  const result = [];
  if (max <= 0) return result;

  for (let i = 0; i < max; i++) {
    let num = i; // 假如：i = num = 123
    let rev = 0; // 存储翻转数字

    while (num > 0) {
      rev = rev * 10 + (num % 10); // 得到 3  32 321
      num = Math.floor(num / 10); // 得到 12 1 0
    }

    if (i === rev) {
      result.push(i);
    }
  }

  return result;
}

// console.time('palindromeNumber1：')
// palindromeNumber1(100 * 10000)
// console.timeEnd('palindromeNumber1：')// 352.567ms

// console.time('palindromeNumber2：')
// palindromeNumber2(100 * 10000)
// console.timeEnd('palindromeNumber2：')// 43.961ms

// console.time('palindromeNumber3：')
// palindromeNumber3(100 * 10000)
// console.timeEnd('palindromeNumber3：')// 41.035ms