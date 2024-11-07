function anyNegative(arr) {
  return arr.some(element => element < 0);
}

console.log(anyNegative([3, 13, -13, 34]));