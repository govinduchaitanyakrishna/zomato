import React,{Component} from 'react';
import axios from 'axios';
import './details.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuDisplay from './menuDisplay'

const url = "https://api-zoma.herokuapp.com/details"
const menu = "https://api-zoma.herokuapp.com/menu"

class Details extends Component {
    constructor(){
        super()

        this.state={
            details:'',
            menuList:'',
            userItem:''
        }
    }

    addToCart = (data) => {
        //console.log("data in card",data)
        this.setState({userItem:data})

    }

    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render(){
        // console.log(">>>>details state",this.state.userItem)
        //let details = this.state.details
        let {details} = this.state
        return(
            <>
                <br/>
                <div className="container">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <h3>{this.state.details.restaurant_name}</h3>
                        </div>
                        <div className="panel-body">
                            <img src={details.restaurant_thumb} alt={details.restaurant_name} className="sliderImage"/>
                           
                           
                            <hr/>
                            <h2>{details.restaurant_name}</h2>
                            <Tabs>
                                <TabList>
                                    <Tab>Details</Tab>
                                    <Tab>Contact</Tab>
                                    <Tab>Menu</Tab>
                                </TabList>

                                <TabPanel>
                                    <p>{details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        
                                </TabPanel>
                                <TabPanel>
                                    <p>CONTACT NUMBER:</p>
                                    <p>NAME OF RESTAURANT OWNER:</p>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Menu</h2>
                                    <MenuDisplay menudata={this.state.menuList}
                                    finalOrder={(data) => {this.addToCart(data)}}/>
                                </TabPanel>
                            </Tabs>
                            <button className="btn btn-success" onClick={this.proceed}>Proceed</button>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }

    //api 
    async componentDidMount(){
        let restId = this.props.match.params.restId;
        let response = await axios.get(`${url}/${restId}`);
        let menudata = await axios.get(`${menu}/${restId}`);
        console.log(response.data)
        console.log(menudata.data)
        this.setState({details:response.data[0],menuList:menudata.data})
    }
}

export default Details;