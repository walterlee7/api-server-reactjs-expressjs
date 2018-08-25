import React, { Component } from 'react';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            price: [],
            total: 0

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

                console.log('books: ' + books)

                let keys = Object.keys(books);
                let booksArray = [];
                let priceArray = [];

                for (let key of keys) {
                    if (key !== 'nextid') {
                        booksArray.push({
                            text: books[key].text,
                            id: key
                        })
                    }
                }

                this.setState({
                    books: booksArray

                });
                console.log('shopping detail');
                console.log(this.state.books);
                console.log(booksArray.length);
                // console.log(booksArray[0].text.price);

                for (let i = 0; i < booksArray.length; i++) {
                    priceArray.push(parseFloat(booksArray[i].text.price, 2));
                }

                this.setState({
                    price: priceArray
                });
                console.log('price: ' + this.state.price);

                let totalPrice = priceArray.reduce((a, b) => parseFloat(a) + parseFloat(b));




                console.log('totalPrice: ' + totalPrice);

                this.setState({

                    total: totalPrice
                });

                console.log('total: ' + this.state.total);

            }).catch((err) => {
                console.log(err);
            });
    }



    render() {
        return (
            <form className="card p-3 m-1">
                <label
                    htmlFor=""
                    className="d-block m-2">Shopping Cart
                </label>
                <p style={{ color: 'blue', padding: 25, }}>
                    Total Price: ${this.state.total}
                </p>
            </form>

        );
    };
}

export default ShoppingCart;
