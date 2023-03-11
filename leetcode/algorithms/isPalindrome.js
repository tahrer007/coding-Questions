//9. Palindrome Number
//Given an integer x, return true if x is a palindrome, and false otherwise.
var isPalindrome = function (x) {
  if (x < 0) return false;

  const arr = x.toString().split("");
  const length = arr.length;
  length;
  if (length === 2) return arr[0] === arr[1];

  const middle = length % 2 ? Math.floor(length / 2) : length+1 / 2 - 1;
  middle;

  for (let i = 0; i < middle; i++) {
    if (arr[i] !== arr[length - (1 + i)]) return false;
  }

  if (!(length % 2) && arr[middle] !== arr[middle + 1]) return false;

  return true;
};

console.log(isPalindrome(1000030001));
