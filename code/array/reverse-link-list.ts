// 反转链表
interface LinkNode {
  value: number
  next: LinkNode | null
}

function getLinkListFromArr(arr: number[]): LinkNode {
  const len = arr.length
  if (len == 0) return null

  // 先构建最后一个链表节点
  let currNode: LinkNode = {
    value: arr[len - 1],
    next: null
  }

  if (len == 1) return currNode

  // 得到正序链表
  for (let i = len - 2; i >= 0; i--) {
    currNode = {
      value: arr[i],
      next: currNode
    }
  }

  return currNode
}

// 时间复杂度：O(n)/*  */
export default (arr: number[]): LinkNode => {
  // 通过数组转成链表
  let head = getLinkListFromArr(arr)

  // 反转链表
  let res = null
  let curr = head
  while (curr) {
    // 保存头结点后的后续链表
    const next = curr.next
    // 将当前节点的下一个指向 next
    curr.next = res
    // 将当前节点保存结果
    res = curr
    // 当前节点指向下一个节点
    curr = next
  }

  return res
}