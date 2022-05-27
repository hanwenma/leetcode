// 使用两个栈实现一个队列

export default class Queue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  get length(): number {
    return this.stack1.length;
  }

  // 时间复杂度 O(1)
  add(num: number): void {
    this.stack1.push(num)
  }

  // 时间复杂度 O(n) => 1 个 while 是 O(n) ，这里有 2 个 while （非嵌套），因此总的应该是 O(2n)，常数项可以省略，因此就是 O(n)
  delete(): number | null {
    // 从 stack1 中依次取出元素，加入到 stack2 中
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }

    // 当 stack2 中没有元素，直接返回 null
    if (this.stack2.length === 0) return null;

    // 从 stack2 中取出栈顶元素，在放回到 stack1 中
    const rs = this.stack2.pop();
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop());
    }

    return rs;
  }
}