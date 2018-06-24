import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    console.log(props);
    // Use this as a reference for mapping out items in an Object
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        })
    })
    return(
        <div>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
};

export default Burger;