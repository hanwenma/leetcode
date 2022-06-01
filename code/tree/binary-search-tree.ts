interface IBinaryTree {
  value: number;
  left: IBinaryTree | null;
  right: IBinaryTree | null;
}

/**
 * 创建二叉树
 * @param arr
 */
export function createBinaryTree(arr: number[]): IBinaryTree | null {
  if (arr.length === 0) return null;

  arr.reverse();

  const binaryTree: IBinaryTree = {
    value: arr.pop(),
    left: null,
    right: null,
  };

  let currTree = binaryTree;
  let isLeft = true;

  while (arr.length > 0) {
    let left = arr.pop();
    let right = arr.pop();
    if (left) currTree.left = createBinaryTree([left]);
    if (right) currTree.right = createBinaryTree([right]);
    currTree = isLeft ? currTree.left : currTree.right;
  }

  return binaryTree;
}

/**
 * 先序遍历
 * @param tree
 * @param sequence
 * @returns sequence
 */
export function preOrederTraverse(
  tree: IBinaryTree,
  sequence: number[] = []
): number[] {
  if (tree === null) return;
  sequence.push(tree.value);
  preOrederTraverse(tree.left, sequence);
  preOrederTraverse(tree.right, sequence);
  return sequence;
}

/**
 * 中序遍历
 * @param tree
 * @param sequence
 * @returns sequence
 */
export function inOrederTraverse(
  tree: IBinaryTree,
  sequence: number[] = []
): number[] {
  if (tree === null) return;
  inOrederTraverse(tree.left, sequence);
  sequence.push(tree.value);
  inOrederTraverse(tree.right, sequence);
  return sequence;
}

/**
 * 后序遍历
 * @param tree
 * @param sequence
 * @returns sequence
 */
export function postOrederTraverse(
  tree: IBinaryTree,
  sequence: number[] = []
): number[] {
  if (tree === null) return;
  postOrederTraverse(tree.left, sequence);
  postOrederTraverse(tree.right, sequence);
  sequence.push(tree.value);
  return sequence;
}

/**
 * 二叉搜索树 - 查找第 k 小值
 * 二叉搜索树特点：left <= value; right >= value;
 * @param tree 
 * @param k 
 */
export function binarySearchTree(tree: IBinaryTree, k: number): number | null {
  const result: number[] = [];
  inOrederTraverse(tree, result);
  return result[k-1]||null;
}
