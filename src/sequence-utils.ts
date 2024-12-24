export function generateFibonacci(n: number): number[] {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, n);
}

export function generatePrimeNumbers(n: number): number[] {
  const primes: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (primes.every(prime => i % prime !== 0)) {
      primes.push(i);
    }
  }
  return primes;
}