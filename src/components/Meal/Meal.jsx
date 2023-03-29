import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {
    const {strMeal,strInstructions,strMealThumb,strCategory} = props.meal
    return (
        <div>
            <div className='singleMeal'>
                <img src={strMealThumb} alt="" />
                <h4>{strMeal}</h4>
                <p>Category: {strCategory}</p>
                <p>Instruction: {strInstructions}</p>
                <div style={{textAlign: 'center'}}>
                    <button onClick={ () => props.handleBtnClicked({strMeal})} id='card-btn'>Add
                    <> </>
                    <FontAwesomeIcon icon={faAdd} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Meal;