import Queue from "../../code/queue/two-stack-one-queue";

describe('two stack one queue', () => {
  const queue = new Queue();
  queue.add(100);
  queue.add(200);
  queue.add(300);

  test("test queue length befoere delete", () => {
    expect(queue.length).toBe(3)
  });

  test("test queue delete", () => {
    expect(queue.delete()).toBe(100)
  });

  test("test queue length after delete", () => {
    expect(queue.length).toBe(2)
  });
});