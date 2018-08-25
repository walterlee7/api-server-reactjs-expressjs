import React, { Component } from 'react';

class BookForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            book: '',
            price: ''
        };
    }

    handleBookInput(book) {

        this.setState({ book });

    };

    handlePriceInput(price) {
        console.log("price: " + price);

        if (price < 0) {
            alert("Enter a positive number!!");
        } else if (price === NaN) {
            alert("Enter a number!!");
        } else {
            this.setState({ price });
        }
    };

    render() {
        return (
            <form className="card p-3 m-1">
                <label
                    htmlFor="book-input"
                    className="d-block m-2">Book Title
                </label>
                <input
                    value={this.state.book}
                    onChange={(event) => { this.handleBookInput(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="Book Title"
                />
                <label
                    htmlFor="price-input"
                    className="d-block m-2">Book Price
                </label>
                <input
                    value={this.state.price}
                    type="number"
                    onChange={(event) => { this.handlePriceInput(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="Book Price"
                />
                <button
                    onClick={() => { this.props.postBook(this.state) }}
                    type="button"
                    className="btn btn-primary m-2">Buy!
                </button>
            </form>

        );
    };
}

export default BookForm;
