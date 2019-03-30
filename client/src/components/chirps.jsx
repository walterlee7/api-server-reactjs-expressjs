import React, { Component } from 'react';
import ChirpForm from './chirpForm';
import ChirpList from './chirpList';

import ShoppingCart from './shoppingCart';

import BookForm from './bookForm';
import BookList from './bookList';

class Chirps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [],
            books: []
        };
    }

    componentDidMount() {
        this.getChirps();
        this.getBooks();
    }

    getChirps() {
        fetch('/api/chirps/')
            .then((response) => {
                return response.json();
            }).then((chirps) => {
                let keys = Object.keys(chirps);
                let chirpsArray = [];

                for (let key of keys) {
                    if (key !== 'nextid') {
                        chirpsArray.push({
                            text: chirps[key].text,
                            id: key
                        });
                    }
                }

                this.setState({
                    chirps: chirpsArray
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    addChirp(text) {
        if (text === '') {
            alert("Add text!!");
        } else {
            fetch('/api/chirps/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text
                })
            }).then(() => {
                this.getChirps();
                // window.location.reload(true);
            }).catch((err) => {
                console.log(err);
            });
        }

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

                // console.log(this.state.books);
            }).catch((err) => {
                console.log(err);
            });
    }

    addBook(text) {
        console.log("text: " + text);
        if (text.book === '' || text.price === '') {
            alert('Enter all info!');
        } else {
            fetch('/api/books/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text
                })
            }).then(() => {
                this.getBooks();
                window.location.reload(true);
            }).catch((err) => {
                console.log(err);
            });
        }

    }

    render() {
        return (
            <div className="container">
                <ChirpForm postChirp={(text) => { this.addChirp(text); }} />
                <BookForm postBook={(text) => { this.addBook(text); }} />


                <ChirpList chirps={this.state.chirps} />
                <BookList books={this.state.books} />

                <ShoppingCart />

            </div>
        );
    }
}

export default Chirps;
