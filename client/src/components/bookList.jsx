import React, { Component, Fragment } from 'react';
import Book from './book';

class BookList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.books.map((book) => {
                    // console.log('book');
                    // console.log(book.text.book);
                    return (
                        <Book key={book.id} text={book.text} index={book.id} />
                    );
                })}
            </Fragment>
        );
    }
}

export default BookList;