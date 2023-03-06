//14. Longest Common Prefix

const longestCommonPrefix = function (strs) {
  if (strs.length === 1 || !strs.length) return strs[0] || "";
  if( strs.every(str => str.length === 0)) return "" ; 

  let result = "";
  let i = 0;

  const checkChar = (i, c) => strs.every((str) => str[i] === c);

  while (checkChar(i, strs[0][i]) && i<=strs[0].length) {
    result += strs[0][i];
    i++;
  }

  return result;
};

console.log(longestCommonPrefix(["",""]));
