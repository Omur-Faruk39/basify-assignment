function flatten(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  }
  return newArr;
}

console.log(flatten([[1, 2], [3, 4]]));