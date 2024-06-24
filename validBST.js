function isValidBST(root) {
  const traverse = (node, min, max) => {
    if (!node) return true;

    if (node.val >= max) return false;
    if (node.val <= min) return false;

    return (
      traverse(node.left, min, node.val) && traverse(node.right, node.val, max)
    );
  };

  return traverse(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
