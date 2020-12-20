import React, { Component } from 'react';
import Axios from "axios";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: "",
            description: "",
            price:'',
            image:'',
            lists: []
        };
    }

    componentDidMount() {
        this.getAll();
    }

    getAll() {
        Axios.get(`http://127.0.0.1:8000/api/v1/products`).then(res => {
            this.setState({
                lists: res.data
            });
            console.log(res.data);
        });
    }

    sumbit(e, id) {
        e.preventDefault();
        if (this.state.id == 0) {
            Axios.post(`http://127.0.0.1:8000/api/v1/products/`, {
                title: this.state.title,
                description: this.state.description,
                price: this.state.price,
                image: this.state.image
            }).then(res => {
                this.setState({
                    title: "",
                    description: "",
                    price: "",
                    image: "",
                });
                this.getAll();
            });
        } else {
            Axios.put(`http://127.0.0.1:8000/api/v1/products/${id}`, {
                title: this.state.title,
                description: this.state.description,
                price: this.state.price,
                image: this.state.image
            }).then(res => {
                this.setState({
                    title: "",
                    description: "",
                    price: "",
                    image: "",
                });
                this.getAll();
            });
        }
    }

    getOne(list) {
        this.setState({
            id: list.id,
            title: list.title,
            description: list.description,
            price: list.price,
            image: list.image
        });
        console.log(list);
    }

    delete(id) {
        Axios.delete(`http://127.0.0.1:8000/api/v1/products/${id}`).then(res => {
            this.getAll();
        });
    }

    titlechange(e) {
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
    }

    descriptionchange(e) {
        console.log(e.target.value);
        this.setState({
            description: e.target.value
        });
    }

    pricechange(e) {
        console.log(e.target.value);
        this.setState({
            price: e.target.value
        });
    }

    render() {
        let sl = 1;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div>
                            <form
                                id="form"
                                onSubmit={e => this.sumbit(e, this.state.id)}
                            >
                                <div className="form-group">
                                    <label style={{float:'left'}} >Title</label>
                                    <input
                                        type="text"
                                        value={this.state.title}
                                        onChange={e => this.titlechange(e)}
                                        className="form-control"
                                        placeholder="Title of To Do List"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{float:'left'}} >Description</label>
                                    <textarea
                                        value={this.state.description}
                                        onChange={e =>
                                            this.descriptionchange(e)
                                        }
                                        className="form-control"
                                        rows="3"
                                        placeholder="Write a Description for To Do List"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label style={{float:'left'}} >Price</label>
                                    <input
                                        type="text"
                                        value={this.state.price}
                                        onChange={e => this.pricechange(e)}
                                        className="form-control"
                                        placeholder="0.00"
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
                        <div className="card">
                            <div className="card-header">To Do List</div>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#Sl</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Price</th>
                                            {/* <th scope="col">Image</th> */}
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.lists.map(list => (
                                            <tr key={list.id}>
                                                <th scope="row">{sl++}</th>
                                                <td>2020-03.29</td>
                                                <td>{list.title}</td>
                                                <td>{list.description}</td>
                                                <td>{list.price}</td>
                                                {/* <td>{list.image}</td> */}
                                                <td>
                                                    <a
                                                        href="#form"
                                                        className="btn btn-info btn-sm"
                                                        onClick={e =>
                                                            this.getOne(list)
                                                        }
                                                    >
                                                        Edit
                                                    </a>
                                                    &nbsp;&nbsp;
                                                    <a
                                                        className="btn btn-danger btn-sm"
                                                        onClick={e =>
                                                            this.delete(list.id)
                                                        }
                                                    >
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Products;