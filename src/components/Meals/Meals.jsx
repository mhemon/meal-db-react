import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = (props) => {
    const search = props.search
    // console.log(search)
    const [meals, setMeals] = useState([])

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(response => response.json())
        .then(data => setMeals(data.meals))
    }, [])
    const [productList, setProductList] = useState([])
    const handleBtnClicked = (productName) => {
        const products = [...productList, productName.strMeal]
        setProductList(products)
    }
    return (
        <div>
            <input id='input-search' type="text" placeholder='Enter words for search' />
            <button onClick={props.handleSearch}>Search</button>
            <div className='container'>
                <div className='meals-container'>
                {
                    meals.map(meal => <Meal meal={meal}
                        key={meal.idMeal}
                        handleBtnClicked={handleBtnClicked}></Meal>)
                }
                </div>

                <div className='sidebar'>
                    <h3>Sidebars Product Name</h3>
                    <p>{productList.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default Meals;