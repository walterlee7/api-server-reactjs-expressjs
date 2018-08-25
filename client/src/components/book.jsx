import React from 'react';
import BookDetailButton from './bookButton';

const Book = (props) => {
    console.log(props);
    return (
        <div className="card m-1">
            <div className="card-body text-left">
                <p className="card-text">
                    Book Name: {props.text.book}
                </p>
                <p className="card-text">
                    Book Price: ${props.text.price}
                </p>
                <BookDetailButton id={props.index} />
            </div>
        </div >
    );
};

export default Book;
