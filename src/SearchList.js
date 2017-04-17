import React from 'react';
import Book from './Book';

const SearchList = (props) => {
    if (props.data.code === 0) {
        return (
            <ul>
                {props.data.data.map((book, i) => {
                    return (
                        <Book
                            book={book}
                            key={i} />
                    )
                })}
            </ul>
        )
    }
    return (
        <div>{props.data.message}</div>
    )
}

export default SearchList;
