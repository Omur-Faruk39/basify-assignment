function sumMixedArray(arr) {
  return arr.reduce((total, element) => {
    if (typeof element === 'number' && !isNaN(element)) {
      return total + element;
    } else if (typeof element === 'string' && !isNaN(parseFloat(element))) {
      return total + parseFloat(element);
    }
    return total;
  }, 0);
}

console.log(sumMixedArray([1, '2', true, '3a', 4, '5.5', false, 'hello']));
