import {
  createBinaryTree,
  preOrederTraverse,
  inOrederTraverse,
  postOrederTraverse,
  binarySearchTree,
} from "../../code/tree/binary-search-tree";

describe("binary search tree", () => {
  const tree1 = createBinaryTree([1, 2, 3, 4, 5]);
  const tree2 = createBinaryTree([5, 3, 4, 1, 3]);

  test("pre oreder traverse", () => {
    expect(preOrederTraverse(tree1)).toEqual([1, 2, 4, 5, 3]);
  });

  test("in oreder traverse", () => {
    expect(inOrederTraverse(tree1)).toEqual([4, 2, 5, 1, 3]);
  });

  test("post oreder traverse", () => {
    expect(postOrederTraverse(tree1)).toEqual([4, 5, 2, 3, 1]);
  });

  test("binary search traverse for k", () => {
    expect(binarySearchTree(tree2, 3)).toBe(3);
    expect(binarySearchTree(tree2, 100)).toBe(null);
    expect(binarySearchTree(tree2, 0)).toBe(null);
  });
});
