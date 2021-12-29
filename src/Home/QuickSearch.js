import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickSearch = (props) => {
  
    const listMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <Link to={`/list/${item.mealtype_id}`}>
                        <div className="tileContainer" key={item.mealtype_id} style={{borderRadius:"15px"}}>
                            <div className="tileComponent1">
                                <img src={item.meal_image} style={{borderRadius:"15px 0px 0px 15px"}} alt="breakfast"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.mealtype}
                                </div>
                                <div className="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }else{
            return(
                <div>
                   <img src="https://i.ibb.co/b17cWJg/food.gif" alt="gif jpeg"/>
                </div>
            )
            
        }
    }
    return(
        <>
        <div id="quicksearch">
            <span id="QuickHeading">
                Quick Searches
            </span>
            <span id="QuickSubHeading">
                Discover restaurants by type of meal
            </span>
            <div id="mainTileContainer">
                {listMeal(props)}
            </div> 
        </div>
        </>
    )
}


export default QuickSearch;