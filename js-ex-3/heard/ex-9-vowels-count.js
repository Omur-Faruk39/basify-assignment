function countVowels(str) {
  const vowelRegex = /[aeiou]/i;
  return str.split('').reduce((total, element) => {
    if (vowelRegex.test(element)) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);
}

console.log(countVowels('hello world!'));
