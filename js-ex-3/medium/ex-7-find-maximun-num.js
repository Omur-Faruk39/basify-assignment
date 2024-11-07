function findMax(arr) {
  return arr.reduce((max, element) => {if(max < element) {return element} else {return max}}, arr[0]);
}

console.log(findMax([3, 434, 2345, 1543]));