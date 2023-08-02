import React from "react";
import { useSelector } from "react-redux";
import Button from "../../UI/Button/Button";
import './OrderSummary.css'


const OrderSummary = (props) => {
    const ingredients = useSelector(state => state.ingredients.basket)
    const totalPrice = useSelector(state => state.ingredients.totalPrice)

    const ingredientSummary = Object.keys(ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey}
                    </span> : {ingredients[igKey]}
                </li>
            )
        })
    return (
        <>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: </strong>{totalPrice} KZT</p>
            <p>Continue to checkout</p>
            <Button btnType={'Danger'} clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType={'Success'} clicked={props.purchaseContinued}>CONTINUE</Button>
        </>
    )
}

export default OrderSummary