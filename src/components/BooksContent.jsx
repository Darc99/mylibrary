import React, { Component } from 'react';

import BookShelf from './BookShelf';

class BooksContent extends Component {

    render() {

        return (
            <div className="list-books-contents">
                <BookShelf />
            </div>
        )
    }
}

export default BooksContent; 