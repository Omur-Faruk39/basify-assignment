function maltiplicationTable(num) {
  const arr = [];
  for (let i = 1; i < (num + 1); i++) {
    arr.push([]);
    for (let j = 1; j < (num + 1); j++) {
      arr[i - 1][j - 1] = j * i;
    }
  }
  return arr;
}
console.log(maltiplicationTable(3));

