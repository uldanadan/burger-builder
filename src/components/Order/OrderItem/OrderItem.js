import React, { useState } from "react";
import './OrderItem.css'

const OrderItem = (props) => {
    const ingredientOutput = Object.keys(props.ingredients).map((key, i) => {
        return <li className={'OrderItem__li'} key={i}>{key}: {props.ingredients[key]}</li>
    })
    // const [errorState, setErrorState] = useState(false)
    // if (Math.random() > 0.7) setErrorState(true);
    // if (Math.random() > 0.7) throw new Error('Well, this happened.');


    return (
        <>
        <div className={'OrderItem'}>
            <ul><strong>Ingredients:</strong> {ingredientOutput}</ul>
            <p>Price: <strong>{props.price} KZT</strong></p>
        </div>
            {/* {errorState ? <p>ERROR!!!!</p> :<div className={'OrderItem'}>
                <ul><strong>Ingredients:</strong> {ingredientOutput}</ul>
                <p>Price: <strong>{props.price} KZT</strong></p>
            </div>} */}
        </>
    )
}

export default OrderItem