var intToRoman = function (num) {
    const symbol = ["I", "V", "X", "L", "C", "D", "M"];
    const values = [1, 5, 10, 50, 100, 500, 1000];
    const NINE = 9;
    const FOUR = 4;
    const FIVE = 5;
    let str = "";
    let count =num.toString().length;
    num;
    count

    while (num >= 1) {
      
      let temp = Math.floor(num/Math.pow(10, count -1 ))
      if (values.includes(temp)) {
        str+=symbol[values.indexOf(temp)]
        num-=temp
      } 
  };
  return str ; 
}
  
  //console.log(intToRoman(15));
  //console.log(intToRoman(3));
  console.log(intToRoman(55));
  //console.log(intToRoman(1994));
  