import React, { Component } from 'react';
import Header from '../components/Header';
import Button from '../components/Button'

class MainPage extends Component {

    render() {
        const { allBooks, moveBook } = this.props;
        return (
            <div className="list-books">
                <Header />
                <div className="list-books">
                <div className="list-books-content">
                  <div>
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Currently Reading</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        {allBooks.filter(book=> book.shelf === 'currentlyReading').map(book =>
                          <li key={book.id}>
                              <div className="book">
                              <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                                  <div className="book-shelf-changer">
                                  <select onChange = {(event) => {moveBook(book, event.target.value)}}>
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
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Want to Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                        {allBooks.filter(book => book.shelf === 'wantToRead').map(book =>
                          <li key={book.id}>
                              <div className="book">
                              <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                                  <div className="book-shelf-changer">
                                  <select onChange= {(event) => {moveBook(book,event.target.value)}}>
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
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                            {allBooks.filter(book => book.shelf === 'read').map(book => 
                              <li key={book.id}>
                              <div className="book">
                              <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                                  <div className="book-shelf-changer">
                                  <select onChange={(event) => {moveBook(book,event.target.value)}}>
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
                  </div>
              </div>
            </div> 
                <Button />
            </div>
        )
    }
}

export default MainPage; 