//3. Longest Substring Without Repeating Characters
const lengthOfLongestSubstring = function (s) {
  if (!s.length) return "";

  let arr = [];
  let max = 0;
  const str = s.split("") ;

  for (let left = 0; left < s.length; left++) {
    for (let right = left; right < s.length; right++) {
        let char = s[right]
        char
        arr.includes("s")
      if (0) {
        if (arr.length>max) max = arr.length;
      } else {
        arr.push(s[right]);
      }
    }

    arr=[] ;
  }

  return max
};

console.log(lengthOfLongestSubstring("abcabcbb"));
