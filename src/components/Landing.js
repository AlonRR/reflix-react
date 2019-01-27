import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import '../Styles/Landing.css'
class Landing extends Component{
    render(){
        return(
            <div>
                <Link to="/movies" >Movies</Link>
            </div>
        )
    }
}
export default Landing