import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './loginComponent.css'
//const url = "https://developerjwt.herokuapp.com/api/auth/register";
const url ="https://app-logout.herokuapp.com/api/auth/register";


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
            // <div className="container">
            //     <br/>
            //     <div className="panel panel-info">
                   
            //         <div className="panel-body">
            //             <div className="row">
                            
            //                 <div className="col-md-12">
            //                     <div className="col-md-6">
            //                         <div className="form-group">
            //                             <label>Name</label>
            //                             <input className="form-control" name="name" value={this.state.name}
            //                             onChange={this.handleChange}/>
            //                         </div>
            //                     </div>
            //                     <div className="col-md-6">
            //                         <div className="form-group">
            //                             <label>EmailId</label>
            //                             <input className="form-control" name="email" value={this.state.email}
            //                             onChange={this.handleChange}/>
            //                         </div>
            //                     </div>
            //                     <div className="col-md-6">
            //                         <div className="form-group">
            //                             <label>Phone</label>
            //                             <input className="form-control" name="phone" value={this.state.phone}
            //                             onChange={this.handleChange}/>
            //                         </div>
            //                     </div>
            //                     <div className="col-md-6">
            //                         <div className="form-group">
            //                             <label>Password</label>
            //                             <input className="form-control" name="password" value={this.state.password}
            //                             onChange={this.handleChange}/>
            //                         </div>
            //                     </div>
                                
            //                 </div>
            //             </div>
            //             <button className="btn btn-success" onClick={this.handleSubmit}>
            //                 Register
            //             </button>
            //         </div>
            //     </div>
            // </div>

<div>
    <div>
        <div style={{marginTop:"-3%"}} className="divisions row justify-content-center">
            <Link to="/"><span id="underline">e!</span></Link>
        </div>
            <section className="login-block" style={{marginTop:"-3%"}}>
            <div className="container">
            <div className="row">
                <div className="col-md-4 login-sec">
                    <h2 className="text-center">Register Now</h2>
        <div className="form-group">
        <div className="form-group">
            <label for="name" className="text-uppercase">Name</label>
            <input className="form-control" id="name" placeholder="Name"name="name" value={this.state.name} onChange={this.handleChange}/>
            
        </div>
        <div className="form-group">
            <label for="emailId" className="text-uppercase">EMAIL</label>
            <input className="form-control" id="emailId" placeholder="EMAIL ID" name="email" value={this.state.email}onChange={this.handleChange}/>
            
        </div>
        <div className="form-group">
            <label for="phone" className="text-uppercase">Phone</label>
            <input className="form-control" id="phone"  placeholder="PHONE" name="phone" value={this.state.phone}onChange={this.handleChange}/>
            
        </div>
            <label for="password" className="text-uppercase">Password</label>
            <input className="form-control" name="password" value={this.state.password} id="password" placeholder="PASSWORD"
            onChange={this.handleChange}/>
        </div>
            <div className="form-check">
            <label className="form-check-label">
            {/* <input type="checkbox" className="form-check-input"/> */}
            {/* <small>Remember Me</small> */}
            </label>
            <button className="btn btn-success" onClick={this.handleSubmit}>
                           Register
            </button>
        </div>
        
        
        <div className="copy-text">Created with <i className="fa fa-heart"></i></div>
                </div>
                <div className="col-md-8 banner-sec">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
                        </ol>
                    <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
            <img className="d-block img-fluid" style={{height:"573px"}} src="https://i.ibb.co/ZNrKZPn/image1-Logindisplay.jpg" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
                <div className="banner-text">
                    <h2>This is Heaven</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>	
        </div>
            </div>
            <div className="carousel-item">
            <img className="d-block img-fluid" style={{height:"573px"}} src="https://i.ibb.co/cCCqbpN/image2-Logindisplay.jpg" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
                <div className="banner-text">
                    <h2>This is Heaven</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>	
            </div>
            </div>
            <div className="carousel-item">
            <img className="d-block img-fluid" style={{height:"573px"}} src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
                <div className="banner-text">
                    <h2>This is Heaven</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>	
            </div>
        </div>
                    </div>	   
                    
                </div>
            </div>
        </div>
    </div>    
</section>
</div>
</div>
            
        )
    }
}

export default Register