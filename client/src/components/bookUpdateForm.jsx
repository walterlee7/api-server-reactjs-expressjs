import React, { Component } from 'react';

class BookUpdateForm extends Component {
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
        this.setState({ price });
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
                    onChange={(event) => { this.handlePriceInput(event.target.value) }}
                    className="form-control w-70 m-2 d-inline"
                    placeholder="Book Price"
                />
                <button
                    onClick={() => { this.props.postBook(this.state) }}
                    type="button"
                    className="btn btn-primary m-2">Update Book
                </button>
            </form>

        );
    };
}

export default BookUpdateForm;
