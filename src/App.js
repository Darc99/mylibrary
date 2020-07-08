import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import * as BooksApi from './BooksAPI';

import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

class BooksApp extends React.Component {

  state = {
    books: [] ,
    shelf: ''
  }

  componentDidMount() {
    BooksApi.getAll()
     .then((books) => {
       this.setState(() => ({
         books
       }))
      });
  }

  updateBook = (book, value) => {
    BooksApi.update(book,value);
    this.state.books.map(items => {
      if(items.id === book.id){
        items.shelf = value;
      }
      return "moved"
    })
    this.setState({
      shelf: value
    })
  }

  addBook = (book) => {
    this.setState((prevState) => ({
      books: prevState.books.concat(book)
    }))
  }

  render() {
    return (
      <div className="app">

        <Route 
          exact path='/'
          render={ () => (
            <MainPage
              allBooks = {this.state.books}
              moveBook = {this.updateBook}
            />
          )}
        />

        <Route 
          path='/search'
          render={ () => (
            <SearchPage 
            addBook = {this.addBook}
            moveBook = {this.updateBook}
            />
          )}
        />

      </div>
    )
  }
}

export default BooksApp
