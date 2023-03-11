//1528. Shuffle String

const restoreString = function (s, indices) {
  if (s.length === 1) return s;
  const arr = new Array(s.length).fill("");
  indices.forEach((indice, i) => {
    arr[indice] = s[i];
  });

  return arr.join("") ; 
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
