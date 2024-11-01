function countOccurrences(arr) {
  const countObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (countObj[arr[i]]) {
      countObj[arr[i]]++;
    } else {
      countObj[arr[i]] = 1;
    }
  }

  return countObj;
}

console.log(countOccurrences(['apple', 'banana', 'apple']));