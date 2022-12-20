/*Product Digits
Have the function ProductDigits(num) take the num parameter being passed which will be a positive integer, and determine the least amount of digits you need to multiply to produce it. For example: if num is 24 then you can multiply 8 by 3 which produces 24, so your program should return 2 because there is a total of only 2 digits that are needed. Another example: if num is 90, you can multiply 10 * 9, so in this case your program should output 3 because you cannot reach 90 without using a total of 3 digits in your multiplication.
Examples
Input: 6
Output: 2
Input: 23
Output: 3
*/

function ProductDigits(num) {

  let result = num.toString().length + 1;

  for (let x = 2; x < num; x++) {

    if (!num % x) {
      let temp = x.toString().length + (num / x).toString().length;

      if (temp < result) result = temp;

    }
  }
  return result;

}

ProductDigits(24)
ProductDigits(8)
ProductDigits(3)