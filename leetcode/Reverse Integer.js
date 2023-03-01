//7. Reverse Integer
/*Given a signed 32-bit integer x, return x with its digits reversed.
 If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.*/

const reverse = function (x) {
  const range = [(-2) ** 31, 2 ** 31 - 1];

  const reversedStr = parseInt(x.toString().split("").reverse().join(""));
  const reversedInt = x > 0 ? reversedStr : -1 * reversedStr;

  return reversedInt >= range[0] && reversedInt <= range[1] ? reversedInt : 0;

};

console.log(reverse(105));
