export default (s: string) => {
  const length = s.length;
  if (length === 0) return true

  const stack = [];
  const braket = {
    '{': 1,
    '[': 1,
    '(': 1,
    ')': -1,
    ']': -1,
    '}': -1,
  };

  // 时间复杂度：O(n) 
  for (let i = 0; i < s.length; i++) {
    const str = s[i]
    // 匹配左括号，入栈
    if (braket[str] === 1) stack.push(str)
    // 匹配右括号
    else if (braket[str] === -1) {
      const p = stack[stack.length - 1];
      // 右括号等于栈顶元素，出栈
      if (braket[str] === -braket[p]) stack.pop()
      // 不等于就意味着整个字符串都不匹配
      else return false
    }
  }

  return stack.length === 0;
}