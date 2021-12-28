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
        <div className="divisions row justify-content-center">
            <Link to="/"><span id="underline">e!</span></Link>
        </div>
            <section class="login-block">
            <div class="container">
            <div class="row">
                <div class="col-md-4 login-sec">
                    <h2 class="text-center">Register Now</h2>
        <div class="form-group">
        <div class="form-group">
            <label for="name" class="text-uppercase">Name</label>
            <input className="form-control" id="name" placeholder="Name"name="name" value={this.state.name} onChange={this.handleChange}/>
            
        </div>
        <div class="form-group">
            <label for="emailId" class="text-uppercase">EMAIL</label>
            <input className="form-control" id="emailId" placeholder="EMAIL ID" name="email" value={this.state.email}onChange={this.handleChange}/>
            
        </div>
        <div class="form-group">
            <label for="phone" class="text-uppercase">Phone</label>
            <input className="form-control" id="phone"  placeholder="PHONE" name="phone" value={this.state.phone}onChange={this.handleChange}/>
            
        </div>
            <label for="password" class="text-uppercase">Password</label>
            <input className="form-control" name="password" value={this.state.password} id="password" placeholder="PASSWORD"
            onChange={this.handleChange}/>
        </div>
            <div class="form-check">
            <label class="form-check-label">
            {/* <input type="checkbox" class="form-check-input"/> */}
            {/* <small>Remember Me</small> */}
            </label>
            <button className="btn btn-success" onClick={this.handleSubmit}>
                           Register
            </button>
        </div>
        
        
        <div class="copy-text">Created with <i class="fa fa-heart"></i></div>
                </div>
                <div class="col-md-8 banner-sec">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
                        </ol>
                    <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
            <img class="d-block img-fluid" style={{height:"550px"}} src="https://i.ibb.co/ZNrKZPn/image1-Logindisplay.jpg" alt="First slide"/>
            <div class="carousel-caption d-none d-md-block">
                <div class="banner-text">
                    <h2>This is Heaven</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>	
        </div>
            </div>
            <div class="carousel-item">
            <img class="d-block img-fluid" style={{height:"550px"}} src="https://i.ibb.co/cCCqbpN/image2-Logindisplay.jpg" alt="First slide"/>
            <div class="carousel-caption d-none d-md-block">
                <div class="banner-text">
                    <h2>This is Heaven</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>	
            </div>
            </div>
            {/* <div class="carousel-item">
            <img class="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide"/>
            <div class="carousel-caption d-none d-md-block">
                <div class="banner-text">
                    <h2>This is Heaven</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>	
            </div>
        </div> */}
                    </div>	   
                    
                </div>
            </div>
        </div>
    </div>    
</section>
</div>
            
        )
    }
}

export default Register