import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import Products from './components/products';
import NotFound from './components/notfound';
import GuestRoute from './components/guestRoute';
import './App.css';

class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <GuestRoute path="/login" component={Login} />
            <GuestRoute path="/register" component={Register} />
            <Route path="/products" component={Products} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </div> );
  }
}
 
export default App;
