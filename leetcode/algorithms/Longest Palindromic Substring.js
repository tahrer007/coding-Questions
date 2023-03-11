/*
Given a string s, return the longest palindromic
 
substring
 in s.
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
1 <= s.length <= 1000
s consist of only digits and English letters.
*/

const recurstion = function (subArr) {
   //"babad" 
  if (!subArr.length) return [];
  if (subArr.length === 1) return subArr;
  if (subArr.length === 2 && subArr[0] !== subArr[1]) return [];
  if (subArr.length === 2 && subArr[0] === subArr[1]) return subArr;
  if (subArr.length === 3 && subArr[0] === subArr[2]) return subArr;

  const pointer = subArr.length - 1;
  let result = [];
  for (let index = pointer; index > 0; index--) {
    if (subArr[0] === subArr[pointer]) {
      let temp = recurstion(subArr.slice(1, index + 1));
      if (temp.length > result.length) result = temp;
    }
  }

  return result;
};

const longestPalindrome = function (s) {
  if (s.length === 1) return s;
  const arr = s.split("");
  let answer = "";

  for (let index = 0; index < arr.length - 1; index++) {
    let temp = recurstion(arr.slice(index, arr.length));
    console.log(temp);
    if (temp.length > answer.length) answer = temp;
  }

  return answer;
};

console.log(longestPalindrome("babad"));
