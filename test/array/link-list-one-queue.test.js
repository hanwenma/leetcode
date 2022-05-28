import Queue from "../../code/array/link-list-one-queue";

describe('link list one queue', () => {

  const queue = new Queue();

  test("queue add", () => {
    expect(queue.length).toBe(0)
    queue.add(100)
    queue.add(200)
    queue.add(300)
    expect(queue.length).toBe(3)
  });

  test("queue delete", () => {
    expect(queue.delete()).toBe(100)
    expect(queue.delete()).toBe(200)
    expect(queue.delete()).toBe(300)
    expect(queue.delete()).toBe(null)
    expect(queue.length).toBe(0)
  });
});