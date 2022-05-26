// https://leetcode.cn/problems/count-binary-substrings/

export default (s) => {
  // 建立电话号码键盘映射 
  const numberMap = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  const codes = s.split('').map(item => numberMap[item]);

  function combination(arr) {
    const temp = []
    for (let i = 0, il = arr[i].length; i < il; i++) {
      for (let j = 0, jl = arr[j].length; j < jl; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }

    arr.splice(0, 2, temp)

    if (arr.length > 1) combination(arr)
    else return temp

    return arr[0]
  }


  return combination(codes);
}