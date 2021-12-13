import React,{Component} from 'react';
import './loginComponent.css';
//const url = "https://developerjwt.herokuapp.com/api/auth/login";
const url ="http://app-logout.herokuapp.com/api/auth/login";

class Login extends Component {
    constructor(props){
        super(props)

        this.state={
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
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk', data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <div className="center">
                <br/>
                <div>
                    <h1 >Login</h1>
                    <div id="form">
                    <div>
                        <h2 style={{color:'red'}}>{this.state.message}</h2>
                        <div>
                            
                            <div className="col-md-12">
                                <div className="col-md-6">
                                    <div className="txt_field">
                                        <input  type="text" placeholder="Username"name="email" value={this.state.email}
                                        onChange={this.handleChange} required/>
                                        <span></span>
                                        <label>Username</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="txt_field">
                                        <input  name="password" type="Password" placeholder="password"value={this.state.password}
                                        onChange={this.handleChange} required/>
                                        <span></span>
                                        <label>Password</label>
                                    </div>
                                 </div>
                                </div>
                                
                            </div>
                        </div>
                        <button className="btn btn-success" id="button" style={{marginLeft:"3%"}} onClick={this.handleSubmit}>
                            Login
                        </button>
                    </div>
                </div>
            </div>

            
            
        )
    }
}

export default Login;




