import React, { Component } from 'react';
import Header from '../components/Header';
import BooksContent from '../components/BooksContent';
import Button from '../components/Button'

class MainPage extends Component {

    render() {

        return (
            <div className="list-books">
                <Header />
                <BooksContent /> 
                <Button />
            </div>
        )
    }
}

export default MainPage; 