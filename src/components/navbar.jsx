import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import cookie from 'js-cookie';

class Navbar extends Component {

    handleLogout(e) {
        e.preventDefault();
        // console.log('logout Clicked');

        cookie.remove('token');
        
        window.location = "/login";
        // this.props.history.replace("/login");
    }

    render() {        
        const token = cookie.get('token');        
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">weDevs</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                {!token ? (
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                        <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
                    </div>
                ) : (
                    
                    <div className="navbar-nav">
                        {/* <NavLink className="nav-item nav-link" to="/products">Product</NavLink> */}
                        <NavLink className="btn btn-sm btn-info" style={{marginLeft:"750px"}} to="/logout" 
                            onClick={e => this.handleLogout(e)}
                        >Logout</NavLink>
                    </div>
                )
    }
                </div>
            </nav>
       );
    }
}
 
export default Navbar;