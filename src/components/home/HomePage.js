import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1> About </h1>
                <p>sdhjk askdjs adasdh asdhaskdh akjsdha sdsakhd asdashd ashd</p>
                <Link to="about" className="btn btn-primary btn-lg">About U</Link>
            </div>
        );
    }
}

export default HomePage;