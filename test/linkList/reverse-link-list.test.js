import reverseLinkList from "../../code/linkList/reverse-link-list";

describe('reverse link list', () => {
  test("reverse link list: [100, 200, 300]", () => {
    const arr = [100, 200, 300];
    const reverse = {
      value: 300,
      next: {
        value: 200,
        next: {
          value: 100,
          next: null
        }
      }
    }
    expect(reverseLinkList(arr)).toEqual(reverse)
  });
});