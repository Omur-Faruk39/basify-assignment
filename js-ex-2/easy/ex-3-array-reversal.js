function arrayReversal(arr) {
  const reversalArray = [];
  for (let i = 0; i < arr.length; i++) {
    reversalArray.unshift(arr[i]);
  }
  return reversalArray;
}

console.log(arrayReversal([1, 2, 3]));