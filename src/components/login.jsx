import React, { Component } from 'react';
import Axios from 'axios';
import cookie from 'js-cookie';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:'',
            errors:{}
        };
    }

    sumbit(e) {
        e.preventDefault();
        Axios.post(`http://127.0.0.1:8000/api/auth/login/`, {
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            // console.log(res);
            cookie.set("token", res.data.access_token);
            this.props.history.replace("/products");
        }).catch(e => {
            this.setState({
                errors:e.response.data
            })
        });

    }

    emailchange(e) {
        console.log(e.target.value);
        this.setState({
            email: e.target.value
        });
    }

    passwordchange(e) {
        console.log(e.target.value);
        this.setState({
            password: e.target.value
        });
    }

    render() { 
        const error = this.state.errors;
        return (            
            <div className="container" style={{padding:'100px 0px'}}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div>
                            <h1>Login</h1>
                            {error.error ?( <h4 className="text-danger" >User is unauthorized</h4>) : ('')}
                            <form
                                id="form"
                                onSubmit={e => this.sumbit(e, this.state.id)}
                            >
                                <div className="form-group">
                                    <label style={{float:'left'}} htmlFor="email" >User Email</label>
                                    <input
                                        type="email"
                                        value={this.state.email}
                                        onChange={e => this.emailchange(e)}
                                        className="form-control"
                                        placeholder="user email"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{float:'left'}} htmlFor="password" >Password</label>
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        onChange={e => this.passwordchange(e)}
                                        className="form-control"
                                        placeholder="password"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div
                                    className="form-group"
                                    style={{ textAlign: "center" }}
                                >
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
 
export default Login;