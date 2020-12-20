import React, { Component } from 'react';
import { Link } from "react-router-dom";
import cookie from 'js-cookie';

class Navbar extends Component {
    render() {        
        const token = cookie.get('token');        
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">weDevs</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/login">Login <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/register">Register</Link>
                    <Link className="nav-item nav-link" to="/products">Product</Link>
                </div>
                </div>
            </nav>
       );
    }
}
 
export default Navbar;