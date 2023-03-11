//98. Validate Binary Search Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var isValidBST = function (root) {
    function isValid(root, min, max) {
      if (!root) return true;
      if (root.val <= min || root.val >= max) return false;
      return (
        isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
      );
    }
    return isValid(root, -Infinity, Infinity);
  };
  

const root1 = new TreeNode(2, 1, 3);
root2 = new TreeNode(5, 1, new TreeNode(4, 3, 6));
console.log(isValidBST(root2));
