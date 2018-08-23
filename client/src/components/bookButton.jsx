import React from 'react';
import { Link } from 'react-router-dom';

const BookDetailButton = (props) => {
    //console.log(props.id);
    return (
        <button id={props.id}><Link to={`/bookDetail/${props.id}`}>See Details</Link></button >
    );
};

export default BookDetailButton;