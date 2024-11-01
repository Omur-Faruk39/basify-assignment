const book = {
  title: 'demoTitle',
  author: 'demoAuthorName',
  year: 2024
};

function returnInfo(book) {
  return `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`
}

console.log(returnInfo(book));