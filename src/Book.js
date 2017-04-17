import React from 'react';

const Book = (props) => {
    const book = props.book;
    return (
        <li>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.publisher}</div>
            <div>{book.isbn}</div>
            <img src={book.cover} alt="" />
        </li>
    )
}

export default Book;
