let patricia_library = 2;
const LIBRARY_NAME = patricia_library;
let myBooks = [];
console.log(LIBRARY_NAME);
console.log(myBooks);

const BOOK_LIST = [
  ["Don Quixote", "Miguel de Cervantes", 300, true],
  ["Ulysses", "James Joyce", 450, true],
  ["The Odyssey", "Homer", 232],
  ["War and Peace", "Leo Tolstoy", 578],
  ["Moby Dick", "Herman Melville", 321],
  ["Hamlet", "William Shakespeare"],
  ["The Great Gatsby", null, 450]
];

const createBook = (names,authors,pages,isRead) =>{
  return {
    name,
    author,
    pages,
    isRead
  }
}

const newBooks = () => {
  let fullBook=[]
  BOOK_LIST.forEach(book =>{
    fullBook.push(createBook(...book))

  })
  
  return fullBook
}
myBooks= newBooks()

console.log(myBooks);
