var romanToInt = function (s) {
  const symbol = ["I", "V", "X", "L", "C", "D", "M"];
  const values = [1, 5, 10, 50, 100, 500, 1000];
  const str = s.split("");

  let int = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    int += values[symbol.indexOf(str[i])];
    if (i > 0 && symbol.indexOf(str[i]) > symbol.indexOf(str[i - 1])) {
      int -= values[symbol.indexOf(str[i-1])];
      i--;
    }
  }
  return int;
};

console.log(romanToInt("MCMXCIV"));
