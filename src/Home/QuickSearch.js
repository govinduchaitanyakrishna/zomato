import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickSearch = (props) => {
  
    const listMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <Link to={`/list/${item.mealtype_id}`}>
                        <div class="tileContainer" key={item.mealtype_id} style={{borderRadius:"15px"}}>
                            <div class="tileComponent1">
                                <img src={item.meal_image} style={{borderRadius:"15px 0px 0px 15px"}} alt="breakfast"/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    {item.mealtype}
                                </div>
                                <div class="componentSubHeading">
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
                   <img src="https://i.ibb.co/b17cWJg/food.gif"/>
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
                Discover reståurânts by type of meal
            </span>
            <div id="mainTileContainer">
                {listMeal(props)}
            </div> 
        </div>
        </>
    )
}


export default QuickSearch;