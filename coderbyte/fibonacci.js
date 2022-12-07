function fibonacci(n) {
  if (!n) return 0;
  if (n == 1 || n == 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(9));
