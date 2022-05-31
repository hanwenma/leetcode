import {
  createBinaryTree,
  preOrederTraverse,
  inOrederTraverse,
  postOrederTraverse,
} from "../../code/tree/binary-search-tree";

describe("binary search tree", () => {
  const tree = createBinaryTree([1, 2, 3, 4, 5]);

  test("pre oreder traverse", () => {
    expect(preOrederTraverse(tree)).toEqual([1, 2, 4, 5, 3]);
  });

  test("in oreder traverse", () => {
    expect(inOrederTraverse(tree)).toEqual([4, 2, 5, 1, 3]);
  });

  test("post oreder traverse", () => {
    expect(postOrederTraverse(tree)).toEqual([4, 5, 2, 3, 1]);
  });
});
