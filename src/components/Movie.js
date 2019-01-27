import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
class Movie extends Component {
    render() {
        const match = this.props.match
        const movie = this.props.state.movies[match.params.num]
        console.log(match.params.num)
        return (
            <div>
            <h1>{movie.title}({movie.year})</h1>
                <img src={movie.img}></img>
                <p>{movie.descrShort}</p>
            </div>
        )
    }
}
export default Movie