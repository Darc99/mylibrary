import React, { Component } from 'react';

import BookGrid from './BookGrid';

class BookShelf extends Component {

    render() {

        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <BookGrid />
                    </div>
                </div>                
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want To Read</h2>
                    <div className="bookshelf-books">
                        <BookGrid />
                    </div>
                </div>                
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <BookGrid />
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf; 