function filterPrimes(arr) {
  return arr.filter((element) => isPrime(element));
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(filterPrimes([1, 5, 6, 7, 3, 36, 13]));
