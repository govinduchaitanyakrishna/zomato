import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickSearch = (props) => {
    const listMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <Link to={`/list/${item.mealtype_id}`}>
                    <div class="titlecontainer " key={item.mealtype_id}>
                            <div class="titleComponent1">
                                <img src={item.meal_image} alt="breakfast"/>
                            </div>
                        <div class="titleComponent2">
                        <div class="componenetheading">
                            {item.mealtype}
                        </div>
                        <div class="componentsubheading">
                            {item.content}
                        </div>
                        </div>
                    </div>
                    </Link>
                )
            })
        }
    }
    return(
      <div>
        <div id="quicksearch">
                <p id="QuickHeading">
                    Quick searches
                </p>
                <p id="QuickSubheading">
                    Restaurants of the Delicacies
                </p>
                <div id="maintitlecontain">
                    {listMeal(props)}
                </div>
                
                

        </div>
      </div>
      
        
    )
}

export default QuickSearch;