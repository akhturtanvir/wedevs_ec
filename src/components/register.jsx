import React, { Component } from 'react';
import Axios from 'axios';
import cookie from 'js-cookie';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password:'',
            errors:{}
        };
    }

    sumbit(e) {
        e.preventDefault();
        Axios.post(`http://127.0.0.1:8000/api/auth/register/`, {
            name: this.state.name,
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

    namechange(e) {
        console.log(e.target.value);
        this.setState({
            name: e.target.value
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
        return (            
            <div className="container" style={{padding:'100px 0px'}}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div>
                            <h1>Register</h1>
                            <form
                                id="form"
                                onSubmit={e => this.sumbit(e, this.state.id)}
                            >
                                <div className="form-group">
                                    <label style={{float:'left'}} htmlFor="name" >Name</label>
                                    <input
                                        type="text"
                                        value={this.state.name}
                                        onChange={e => this.namechange(e)}
                                        className="form-control"
                                        placeholder="Name"
                                        required
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{float:'left'}} htmlFor="email" >Email</label>
                                    <input
                                        type="email"
                                        value={this.state.email}
                                        onChange={e => this.emailchange(e)}
                                        className="form-control"
                                        placeholder="email"
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
                                        Submit
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
 
export default Register;