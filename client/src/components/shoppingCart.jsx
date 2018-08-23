import React, { Component } from 'react';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            price: [],

        };
    }

    componentDidMount() {
        this.getBooks();
        this.addCart();

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
                        })
                    }
                }


                this.setState({
                    books: booksArray,
                    price: priceArray
                });
                console.log('shopping detail');
                console.log(this.state.books);
            }).catch((err) => {
                console.log(err);
            });
    }

    addCart() {
        //need to set the state for price

        console.log(this.state.price);
    };

    render() {
        return (
            <form className="card p-3 m-1">
                <label
                    htmlFor=""
                    className="d-block m-2">Shopping Cart
                </label>
                <p style={{ color: 'blue', padding: 25, }}>
                    Total Price: {this.state.price}
                </p>
            </form>

        );
    };
}

export default ShoppingCart;
