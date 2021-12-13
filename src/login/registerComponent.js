import React,{Component} from 'react';
import './loginComponent.css';
//const url = "https://developerjwt.herokuapp.com/api/auth/register";
const url ="http://app-logout.herokuapp.com/api/auth/register";


class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            phone:'',
            email:'',
            password:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(url,
            {
                method:'POST',
                headers:{
                    'accept':'application/json',
                    'content-type':'application/json'
                },
                body:JSON.stringify(this.state)
            }
        )
        .then(this.props.history.push('/login'))
    }

    render(){
        return(
            <div className="center">
                <br/>
                <div className="panel panel-info">
                   <h1>Register</h1>
                    <div id="form">
                        <div className="row">
                            
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <div className="txt_field">
                                        <input type="text" placeholder="Name" name="name" value={this.state.name}
                                        onChange={this.handleChange}/>
                                         <span></span>
                                        <label>Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="txt_field">
                                        <input type="text" placeholder="EmailId" name="email" value={this.state.email}
                                        onChange={this.handleChange}/>
                                         <span></span>
                                        <label>EmailId</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="txt_field">
                                        <input type="text" placeholder="Phone" name="phone" value={this.state.phone}
                                        onChange={this.handleChange}/>
                                         <span></span>
                                        <label>Phone</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="txt_field">
                                        <input type="password" placeholder="Password" type="password" name="password" value={this.state.password}
                                        onChange={this.handleChange}/>
                                        <span></span>
                                        <label>Password</label>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <button className="btn btn-success" id="button" onClick={this.handleSubmit}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Register