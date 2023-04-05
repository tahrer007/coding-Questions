//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

function sumDigPow(a, b) {
  const arr = [];

  while (a <= b) {
    let numArr = a
      .toString()
      .split("")
      .map((x) => Number(x));
    let sum = 0;

    for (let i = 0; i < numArr.length; i++) {
      sum += Math.pow(numArr[i], i + 1);
    }

    if (a === sum) arr.push(a);
    a++;
  }

  return arr;
}

console.log(sumDigPow(1, 10));
