interface IResult {
  char: string;
  length: number;
}

/**
 * 查找最长连续字符串（嵌套循环）
 * 时间复杂度：O(n)
 * 因为存在跳步，所以看似时间复杂度是 O(n^2)，但实际是 O(n)
 * @param s
 */
export function continueStringLength1(s: string): IResult {
  const length = s.length;
  const result: IResult = {
    char: "",
    length: 0,
  };
  if (length === 0) return result;

  for (let i = 0; i < length; i++) {
    let tempLen = 1;

    for (let j = i + 1; j < length; j++) {
      if (s[i] === s[j]) {
        tempLen++;
      }

      // 不相等 或 j 已经是末尾元素，需要判断最大长度
      if (s[i] !== s[j] || j === length - 1) {
        if (tempLen > result.length) {
          result.char = s[i];
          result.length = tempLen;
        }

        i = j - 1; // 跳步：一但不相等，就切换 i 的起始位置
        break;
      }
    }
  }

  return result;
}

/**
 * 查找最长连续字符串(双指针)
 * 时间复杂度：O(n)
 * @param s
 */
export function continueStringLength2(s: string): IResult {
  const length = s.length;
  const result: IResult = {
    char: "",
    length: 0,
  };
  if (length === 0) return result;

  let tempLen = 0;
  let i = 0;// 指向后一个节点
  let j = 0;// 指向前一个节点

  for (; i < length; i++) {
    if (s[i] === s[j]) {
      tempLen++;
    }

    if (s[i] !== s[j] || i === length - 1) {
      if (tempLen > result.length) {
        result.char = s[j];
        result.length = tempLen;
      }
      // 重置
      tempLen = 0;
      if (i < length - 1) {
        j = i;
        i--;
      }
    }
  }

  return result;
}
