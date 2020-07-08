import React, { Component } from 'react';
import * as BooksApi from '../BooksAPI';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
     constructor(props) {
       super(props);
       this.state = {
          query: '',
          searchedBooks: []
        }       
     } 


      showBooks = (value) => {
        this.setState({
          query: value.trim()
        })
        console.log("search value")
        BooksApi.search(value)
          .then(searchedBooks => {
            this.setState ({
              searchedBooks
            })
          })
      }

    render(){


      const { searchedBooks } = this.state;
      const { addBook, moveBook } = this.props;
        return( 
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                    className='close-search'
                    to='/' >
              </Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                 onChange ={(event) => this.showBooks(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {searchedBooks.map(book => 
              <li key={book.title}>
                  <div className="book">
                  <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                      <div className="book-shelf-changer">
                      <select onChange={(event) => {
                        moveBook(book,event.target.value);
                        addBook(book);
                        }}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                      </select>
                      </div>
                  </div>
                  <div className="book-title"> {book.title} </div>
                  <div className="book-authors"> {book.authors} </div>
                  </div>
              </li>
              )}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchPage;