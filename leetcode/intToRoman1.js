var intToRoman = function (num) {
  const symbol = ["I", "V", "X", "L", "C", "D", "M"];
  const values = [1, 5, 10, 50, 100, 500, 1000];
  const NINE = 9;
  const FOUR = 4;
  const FIVE = 5;

  let str = "";
  let count = 0;
  num;

  const removeD = (count, temp) => Math.pow(10, count + 1) + temp;

  const moreThan5 = (count, temp, temp2) => {
    if (temp === NINE * Math.pow(10, count)) {
      return (
        symbol[values.indexOf(temp2) + 1] +
        "" +
        symbol[values.indexOf(temp2) - 1]
      );
    } else {
      return (
        symbol[values.indexOf(temp2) - 1].repeat(temp - 5) +
        "" +
        symbol[values.indexOf(temp2)]
      );
    }
  };

  const lessThan5 = (count, temp, temp2) => {
    if (temp === FOUR * Math.pow(10, count)) {
      return (
        symbol[values.indexOf(temp2)] + "" + symbol[values.indexOf(temp2) - 1]
      );
    } else {
      return symbol[values.indexOf(temp2) - 1].repeat(temp);
    }
  };

  while (num >= 1) {
    let temp = num % Math.pow(10, count + 1);
    let temp2 = FIVE * Math.pow(10, count);
    
    if (values.includes(temp)) {
      str += symbol[values.indexOf(temp)];
    } else if (temp < temp2) {
      str += lessThan5(count, temp, temp2);
    } else {
      str += moreThan5(count, temp, temp2);
    }
    num -= values.includes(temp) ? temp : removeD(count, temp);
    num;
    count++;
  }

  return str.split("").reverse().join("");
};

//console.log(intToRoman(15));
//console.log(intToRoman(3));
console.log(intToRoman(58));
//console.log(intToRoman(1994));
