function sumArray(arr) {
  let total = 0;
  arr.forEach(element => {
    total += element;
  });

  return total;
}

console.log(sumArray([2, 3, 6, 7]));