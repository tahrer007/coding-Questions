function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;

  let obj = {};
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  for (let i = 0; i < str1.length; i++) {
    obj[arr1[i]] = (obj[arr1[i]] || 0) + 1;
    obj[arr2[i]] = (obj[arr2[i]] || 0) - 1;
  }

  for (const key in obj) {
    if (obj[key]) return false;
  }
  return true;
}

validAnagram("icecream", "cenima");
console.log(validAnagram("test", "ttes"));
