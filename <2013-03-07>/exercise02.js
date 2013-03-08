function fibonacci (n) {
  if (!(n in fibonacci)) {
    fibonacci[n] = fibonacci(n-2)+fibonacci(n-1); 
  }
  return fibonacci[n];
}
fibonacci[0] = 0;
fibonacci[1] = 1;