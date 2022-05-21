// https://leetcode.cn/problems/reverse-words-in-a-string-iii/

// 方式一：利用数组 reverse 方法进行翻转
// export default (s) => {
//   return s.split(' ').map(w => w.split('').reverse().join('')).join(' ')
// }

// 方式二：利用正则表达式
export default (s) => {
  return s.match(/[\w']+/g).map(w => w.split('').reverse().join('')).join(' ')
}