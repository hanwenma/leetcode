
// 反转链表
interface LinkNode {
  value: number
  next: LinkNode | null
}

// 创建链表
function createLinkList(arr: number[]): LinkNode {
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

// 反转链表: 根据旧链表，构建新链表，即依次取出旧链表的头节点，构建新链表的头节点
function reverseLinkList(oldHead: LinkNode): LinkNode {
  // 初始化尾节点为 null
  let newHead = null

  while (oldHead) {
    // 保存当前旧链表头节点的下一个节点
    const nextOldNode = oldHead.next
    // 将当前旧链表中的头节点指向新链表的头节点
    oldHead.next = newHead
    // 旧链表头节点作为新链表的头节点
    newHead = oldHead
    // 将旧链表的头节点更新为下一个节点
    oldHead = nextOldNode
  }

  // 返回新链表
  return newHead
}

// 时间复杂度：O(n)
export default (arr: number[]): LinkNode => {
  // 通过数组转成链表
  let head = createLinkList(arr)
  // 反转链表并返回
  return reverseLinkList(head)
}