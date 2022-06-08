/**
 * 实现字母大小写切换
 * @param s
 */
export function switchLetterCase(s: string): string {
  let length = s.length;
  if (length === 0) return s;

  let result = "";
  for (let i = 0; i < length; i++) {
    const c = s[i];
    const code = c.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      // A-Z
      result += c.toLocaleLowerCase();
    } else if (code >= 97 && code <= 122) {
      // a-z
      result += c.toUpperCase();
    } else {
      // 其他字符
      result += c;
    }
  }

  return result;
}
