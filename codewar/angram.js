/* 
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/
function checkAngram(wordLength, chars, wordToCheck) {
  if (wordLength !== wordToCheck.length) return false;
  for (let i = 0; i < wordToCheck.length; i++) {
    if (wordToCheck[i] in chars) chars[wordToCheck[i]]--;
    else return false;
  }

  for (const key in chars) {
    if (chars[key]) return false;
  }
  return true;
}
function anagrams(word, words) {
  const arr = [];
  const obj = {};
  const wordLength = word.length;

  for (let i = 0; i < word.length; i++) {
    if (word[i] in obj) obj[word[i]]++;
    else obj[word[i]] = 1;
  }

  words.forEach((element) => {
    const obj2 = { ...obj };
    if (checkAngram(wordLength, obj2, element)) arr.push(element);
  });
  return arr;
}
//anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer']
console.log(anagrams("racer", ["crazer", "racer", "carer", "racar", "caers"]));
