import React, { Component } from 'react';
import BookUpdateForm from './bookUpdateForm';

class bookDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [
                {
                    text: '',
                    id: 0
                },
            ]
        };
    }

    componentDidMount() {
        this.getBooks();

    }

    getBooks() {
        fetch('/api/books/')
            .then((response) => {
                return response.json();
            }).then((books) => {
                let keys = Object.keys(books);
                let booksArray = [];

                for (let key of keys) {
                    if (key !== 'nextid') {
                        booksArray.push({
                            text: books[key].text,
                            id: key
                        });
                    }
                }

                this.setState({
                    books: booksArray
                });
                console.log('book detail');
                console.log(this.state.books);
            }).catch((err) => {
                console.log(err);
            });
    }

    updateBook(text) {

        fetch(`/api/books/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text
            })
        }).then(() => {
            console.log("update clicked");
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    deleteBook() {
        fetch(`/api/books/${this.props.match.params.id}`, {
            method: 'DELETE',
        }).then(() => {
            console.log("delete success");
            this.props.history.push('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        // console.log(this.props.match.params.id);
        return (
            <div className="container">
                {this.state.books.map((book) => {
                    console.log('book');
                    console.log(book);
                    if (book.id == this.props.match.params.id) {
                        return (
                            <div key={book.id} className="card m-1">
                                <div className="card-body text-left">
                                    <p className="card-text">
                                        Book Name: {book.text.book}
                                    </p>
                                    <p className="card-text">
                                        Book Price: {book.text.price}
                                    </p>
                                </div>
                                <button id={book.id} className="delete"
                                    onClick={() => { this.deleteBook(); }}
                                >Delete Book</button>
                            </div >
                        );
                    }
                })}
                <BookUpdateForm postBook={(text) => { this.updateBook(text); }} />
            </div>
        );
    }
}



export default bookDetails;