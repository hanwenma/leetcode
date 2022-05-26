// https://juejin.cn/user/4441682709585128/posts

export default (arr) => {
  if (arr.length <= 1) return false;

  arr.sort((x, y) => x - y);
  let min = Number.MAX_SAFE_INTEGER;

  const res = [];

  for (let i = 0, temp = []; i < arr.length; i++) {
    temp.push(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        temp.push(arr[j])
      } else {
        min = Math.min(min, temp.length)
        res.push([...temp])
        temp.length = 0
        i = j
        break
      }
    }
  }

  for (const group of res) {
    if (group.length % min !== 0) return false
  }

  return true
}