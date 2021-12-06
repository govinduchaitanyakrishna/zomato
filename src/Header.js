import React, { Component } from 'react';
import './Header.css'
import { Link, withRouter } from 'react-router-dom';

const url = "https://krishdevjwt.herokuapp.com/api/auth/register"

class Header extends Component {

    constructor() {
        super()

        this.state = {
            userData=''
        }
    }

    handleLogout = () => {
        this.setState({ userData: '' });
        sessionStroage.removeItem('ltk');
        sessionStroage.removeItem('userData');
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if (this.state.userData.name) {
            let data = this.state.userData.name;
            let outputArry = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userData', outputArry);
            return (
                <>
                    <button className="btn btn-info">Hi {this.state.userData.name}</button>
                    &nbsp;
                    <button className="btn btn-warning" onClick={this.handleLogout}>Logout</button>
                </>
            )
        } else {
            return (
                <>
                        <Link className="btn btn-success" to="/register">
                            <span className="glyphicon glyphicon-log-in"></span>SignUp
                        </Link> &nbsp;
                        <Link className="btn btn-info" to="/login">
                            <span className="glyphicon glyphicon-user"></span>Create an account
                        </Link>
                </>
            )
        }
    }
    render() {
        return (
            <header id="header">
                <div id="logo_main">
                    <Link to="/"><h1 id="heading">e!</h1></Link>
                    <Link to="/viewOrder">Orders</Link>
                </div>
                <div className="logoRight">
                    {this.conditionalHeader()}
                </div>
            </header>
        )
    }

    componentDidMount() {
        fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    userData: data
                })
            })
    }

}

export default withRouter(Header);