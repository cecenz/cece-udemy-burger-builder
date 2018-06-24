 import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 
 class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case('bread-bottom'):
                ingredient = <p>Bread bottom</p>;
                break;
            case('bread-top'):
                ingredient = <p>Bread top</p>;
                break;
            case('meat'):
                ingredient = <p>Meat</p>;
                break;
            case('cheese'):
                ingredient = <p>Cheese</p>;
                break;
            case('salad'):
                ingredient = <p>Salad</p>;
                break;
            case('bacon'):
                ingredient = <p>bacon</p>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
     };
    }

    BurgerIngredient.propTypes = {
        type: PropTypes.string.isRequired
    }

 export default BurgerIngredient;