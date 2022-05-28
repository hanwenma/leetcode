/**
 使用链表实现一个队列（先进后出）

 - 链表实现队列的效率要比数组（栈）实现链表要高
  - 链表是零散存储的，因此删除任意节点时间复杂度为 O(1)
  - 链表的查询时间复杂度为 O(n)，因此是实现队列长度时 长度应单独计算，而不是遍历链表长度
  - 数组是连续存储的，因此从数组开始或中间删除节点的时间复杂度为 O(n)
  - 数组是连续存储，每个节点都对应一个下标索引值，因此查询时间复杂度为 O(1)

 * */

interface LinkList<T = number> {
  value: T
  next: LinkList | null
}

export default class Queue {
  private len: number = 0;
  private head: LinkList = null;
  private tail: LinkList = null;

  get length(): number {
    return this.len;
  }

  // 时间复杂度 O(1)
  add(num: number): void {
    const node: LinkList = {
      value: num,
      next: null
    }

    // 初始化将新节点赋值为 队头 和 队尾
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      // 往队尾添加节点
      this.tail.next = node;
      // 将队尾指向当前节点
      this.tail = node;
    }

    // 长度加 1
    this.len++;
  }

  // 时间复杂度 O(1) 
  delete(): number | null {
    if (this.len == 0) return null;

    // 取值
    const value: number = this.head.value;
    // 将头节点指向下一个节点
    this.head = this.head.next;
    // 长度减 1
    this.len--;

    return value;
  }
}