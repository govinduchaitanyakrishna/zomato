import React, { Component } from 'react';
import './Search.css';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const locationUrl = "https://api-zoma.herokuapp.com/location";

const restUrl = "https://api-zoma.herokuapp.com/restaurant?stateid="

class Search extends Component {
    constructor(props) {
        super()
        this.state = {
            location: '',
            restaurant: ''
        }
    }

    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRestaurants = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.restaurant_id}>{item.restaurant_name} ! {item.address}</option>
                )
            })
        }
    }

    handleCity = (event) => {
        console.log(event.target.value)
        const stateId = event.target.value
        fetch(`${restUrl}${stateId}`, { methos: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurant: data })
            })
    }

    handleRest = (event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    render() {
        console.log(this.state.restaurant)
        return (
            <div>
                <div id="search">
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#edunav">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <Link class="navbar-brand" to="/">Zomato</Link>
                            </div>
                            <div class="collapse navbar-collapse" id="edunav">
                                <ul class="nav navbar-nav navbar-right ">
                                    <div className="logoRight" style={{marginTop:"6%"}}>
                                        <Link className="btn btn-success" to="/register">
                                            <span className="glyphicon glyphicon-log-in"></span> Register
                                        </Link> &nbsp;
                                        <Link className="btn btn-info" to="/login">
                                            <span className="glyphicon glyphicon-user"></span>Login
                                        </Link>
                                    </div>
                                </ul>
                            </div>
                        </div>

                    </nav>
                    <div id="logo">
                        <span>e!</span>
                    </div>
                    <div id="Heading">
                        WELCOME TO DELICACIES WORLD
                    </div>
                    <div id="dropdown">
                        <select onChange={this.handleCity}>
                            <option>---SELECT LOCATION---</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select id="restaurant" onChange={this.handleRest}>
                            {this.renderRestaurants(this.state.restaurant)}
                        </select>

                    </div>
                </div>
            </div>
        )

    }
    //on page load we have to call api 
    componentDidMount() {
        fetch(locationUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ location: data })
            })
    }
}


export default withRouter(Search);