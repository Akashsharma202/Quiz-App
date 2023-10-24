import React, { useEffect, useState } from 'react';
import "./Components/Search.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
class Search2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name1:"", data: [], search: "" };
    }

    searchBooks = async () => {
        try {
            // console.log(thisname, search);
            const response = await axios.get(`http://localhost:7000/search/${this.state.name1}?Search=${this.state.search}`);
            this.props.setData(response.data);
        } catch (error) {
            console.log(this.state.data);
            console.error(error);
        }
    };



    shouldComponentUpdate = () => {
        return false;
    }

    componentDidMount = () => {
        // console.log("I am runnning")
        if (this.state.name1 || this.state.search) {
            this.searchBooks();
        }
        if (this.props.success && (!this.state.name1 || !this.state.search)) {
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://localhost:7000/');
                    this.setState({ data: response.data },function(){
                        this.setState({data:response.data});
                    })
                    console.log(this.state.data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchData();
        }
    }


    
    HandleOnChange = (e) => {
        this.setState({search:e.target.value});
        console.log(this.state.search);
    };

    render() {
        return (
            <div>
                <form className="Form">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {this.state.name1 !== "" ? this.state.name1 : "Select"}
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" onClick={(e) => {
                                e.preventDefault();
                                this.setState({name1:"BookName"},function(){
                                    this.setState({name1:"BookName"})
                                });
                                console.log(this.state.name1)
                            }}>Book Name</button></li>
                            <li><button className="dropdown-item" onClick={(e) => {
                                e.preventDefault();
                                this.setState({name1:"AuthorName"});
                            }}>Author Name</button></li>
                            <li><button className="dropdown-item" onClick={(e) => {
                                e.preventDefault();
                                this.setState({name1:"Genre"});
                            }}>Genre</button></li>
                            <li><button className="dropdown-item" onClick={(e) => {
                                e.preventDefault();
                                this.setState({name1:"Year"});
                            }}>Publishing Year</button></li>
                        </ul>
                    </div>
                    <input type="text" placeholder="Search" onChange={this.HandleOnChange} value={this.search} list="suggestions" />
                    <datalist id="suggestions">
                        {this.state.data &&
                            this.state.data.map((Element) => <option value={Element[this.state.name1]} />)
                        }
                    </datalist>
                </form>
                <div className='main'>
                    {this.state.data &&
                        this.state.data.map((Element) => (
                            <div className="card" style={{ width: "18rem" }} key={Element._id}>
                                <img className="card-img-top" src={Element.ImgLink} style={{ height: "196px" }} alt={Element._id} />
                                <div className="card-body">
                                    <h5 className="card-title">{Element.BookName}</h5>
                                    <p className="card-text">
                                        <b>Author Name:        </b>{Element.AuthorName}
                                        <br />
                                        <b>Genre: </b>{Element.Genre}
                                        <br />
                                        <b>Year: </b>{Element.Year}
                                        <br />
                                        <b>Copies Left: </b>{Element.Copies}
                                    </p>
                                    <button className="btn btn-primary" disabled={Element.disabled} onClick={() => {
                                        const updatedCart = [...this.props.cart, Element];
                                        this.props.setCart(updatedCart);
                                        Element.disabled = true;
                                        Element.Copies = Element.Copies - 1;
                                        this.props.setCost(this.props.cost + Element.Price);
                                    }}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
};

export default Search2;