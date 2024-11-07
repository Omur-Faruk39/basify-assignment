function squareAndSum(arr) {
  const newArray = arr.map((element) => element * element);
  return newArray.reduce((total, value) => (total + value), 0)
}

console.log(squareAndSum([2, 1, 3]));