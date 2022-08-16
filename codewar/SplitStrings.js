/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
xamples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
function solution(str) {
  let arr = [];

  for (let i = 0; i < str.length; i = i + 2) {
    if (str.length % 2 !== 0 && i === str.length - 1) {
      arr.push(str[i] +"_");
    } else {
      let subStr = str[i] + str[i + 1];
      arr.push(subStr);
    }
  }

  return arr;
}
const str = "abc";
console.log(solution(str));
