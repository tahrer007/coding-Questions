/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

const isFound = (arr, char) =>
  arr.some((arrVal) => arrVal.toLowerCase() === char.toLowerCase());

const checkIndex = (LowerChar, notRepeted) => {
  let index = notRepeted.indexOf(LowerChar);
  if (index > -1) return index;
  return notRepeted.indexOf(LowerChar.toUpperCase());
};
function firstNonRepeatingLetter(s) {
  const arr = s.split("");
  let notRepeted = [];
  let repeated = [];
 

  arr.forEach((char) => {
    if (!isFound(notRepeted, char) && !isFound(repeated, char))
      notRepeted.push(char);
    else if (isFound(notRepeted, char) && !isFound(repeated, char)) {
      repeated.push(char.toLowerCase());
      let index = checkIndex(char.toLowerCase(), notRepeted);
      notRepeted.splice(index, 1);
    } else if (!isFound(repeated, char)) repeated.push(char.toLowerCase());
  });
  if (!notRepeted.length) return "";
  return notRepeted[0];
}
const test = "Tt";
//firstNonRepeatingLetter(test);

console.log(firstNonRepeatingLetter(test));
