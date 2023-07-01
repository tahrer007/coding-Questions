function countSkills(tree, required) {
  if (!required.size) return 0;
  if (required.size === 1 && required.has(0)) return 1;

  const mySet = new Set([0]);

  required.forEach((value) => {
    let x = value;
    if (!mySet.has(tree[x])) {
      while (tree[x]) {
        mySet.add(tree[x]);
        x = tree[x];
      }
    }
  });

  const test = new Set([...mySet, ...required]);

  return test.size;
}

console.log(countSkills([0, 0, 0, 1, 3, 3, 2], new Set([1, 2, 4])));
