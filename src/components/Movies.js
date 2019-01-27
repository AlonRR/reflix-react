import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import '../Styles/Movies.css'
class Movies extends Component {
    rentMovie = e => {
        console.log(e.target.attributes.value.nodeValue)
        // debugger 
        this.props.rentMovie(e.target.attributes.value.nodeValue, e.target.attributes.isrented.nodeValue)
    }
    movieWriter = (movie, icon) => {
        return (
            <span>
                <Link to={`/movies/${movie.id}`}>
                    <div>{movie.title}</div>
                    <img src={movie.img} alt="" />
                </Link>
                <span className={`icon${movie.isRented}`}><p value={movie.id} isrented={`${movie.isRented}`} onClick={this.rentMovie} >{icon}</p></span>
            </span>
        )
    }
    render() {
        return (
            <div className="movies">
                {this.props.state.movies.map(movie => {
                    // console.log(movie)
                    return movie.isRented ?  this.movieWriter(movie, `-`) : this.movieWriter(movie, `+`)
                })}
            </div>
        )
    }
}
export default Movies