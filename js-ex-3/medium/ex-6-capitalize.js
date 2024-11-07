function capitalizeWords(str) {
  return str.split(' ').map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1);
  }).join(' ');
}

console.log(capitalizeWords('hello world!'));
