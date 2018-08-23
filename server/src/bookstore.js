const fs = require('fs');
let books = { nextid: 0 };

let getBooks = () => {
    return Object.assign({}, books); //create a copy and return it
}

let getBook = id => {
    return Object.assign({}, books[id]); //create a copy and return it
}

let createBook = (book) => {
    books[books.nextid++] = book;
    writeBooks();
};

let updateBook = (id, book) => {
    books[id] = book;
    writeBooks();
}

let deleteBook = id => {
    delete books[id];
    writeBooks();
}

let writeBooks = () => {
    fs.writeFileSync('books.json', JSON.stringify(books));
};

if (fs.existsSync('books.json')) {
    books = JSON.parse(fs.readFileSync('books.json'));
} else {
    writeBooks();
}

module.exports = {
    CreateBook: createBook,
    DeleteBook: deleteBook,
    GetBooks: getBooks,
    GetBook: getBook,
    UpdateBook: updateBook
};
