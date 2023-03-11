//12. Integer to Roman

var intToRoman = function (num) {
  const values = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let romen = "";

  for (const key in values) {
    while (num >= values[key]) {
      romen += key;
      num -= values[key];
      console.log(romen);
    }
  }
  romen;

  return romen;
};

console.log(intToRoman(58));
