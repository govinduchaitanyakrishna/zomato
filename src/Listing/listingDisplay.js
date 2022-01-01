import React, {useState} from 'react';
import './listing.css';
import {Link} from 'react-router-dom';
import Pagination from './Pagination';

const ListingDisplay = (props) => {

    const [showPerPage] = useState(3);

    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage
    });

    const onPaginationChange = (start, end) => {
        setPagination({start:start, end:end})
    }

    const renderList = ({listData}) => {

        if(listData){
            if(listData.length>0){
                return listData.slice(pagination.start, pagination.end).map((item) => {
                    return(
                        <div className="container-fluid mb-3 mr-3 filter2" key={item.restaurant_id} style={{borderRadius: '15px'}}>
                            <div className="image_con">
                                {/* <img src={item.restaurant_thumb} alt="Business" className="Img"/> */}
                                <Link to={`/details/${item.restaurant_id}`}><img src={item.restaurant_thumb} alt="Business" className="Img"/></Link>
                            </div>
                            <div className="display">
                                <div style={{fontSize:'25px', color:'blue', fontWeight: 'bold'}}>
                                 <Link to={`/details/${item.restaurant_id}`}>{item.restaurant_name}</Link>    
                                </div>
                                <div style={{fontSize:'19px', fontWeight: 'bold'}}>
                                    {item.address}<br/>
                                    <span className="badge badge-danger">
                                        {item.cuisines[0].cuisine_name}
                                    </span> &nbsp;
                                    <span className="badge badge-info">
                                        {item.cuisines[1].cuisine_name}
                                    </span>        
                                </div>
                            </div>
                            <hr/>
                            <div>
                                <div>
                                    <div className="display"><b>Cost for two:-</b></div>
                                    <div className="display">
                                        {item.cost}
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })
            }else{
                return(
                    <div>
                        <h3>No data for this</h3>
                    </div>
                )
            }
            
        }else{
            return(
                <div>
                   <img src="https://i.ibb.co/b17cWJg/food.gif" alt="food"/>
                </div>
            )
            
        }

    }


    return(
        <>
        
        
                {renderList(props)}
                <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={props.listData.length}/>
            
        
        </>
    )
}

export default ListingDisplay