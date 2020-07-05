import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Button extends Component {

    render() {

        return (
            <div>
                <Link
                    className='open-search'
                    to='/search' >
                    <button>Add a book</button>
                </Link>
              
            </div>
        )
    }
}

export default Button; 