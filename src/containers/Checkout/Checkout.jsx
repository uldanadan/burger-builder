import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { useSelector } from "react-redux";


const Checkout = () => {
    const navigate = useNavigate()

    const ingredients = useSelector(state => state.ingredients.basket)
    const checkoutCancelledHandler = () => {
        navigate(-1)
    }

    const checkoutContinuedHandler = () => {
        navigate('contact-data')
    }

    return (
        <>
            <CheckoutSummary 
                ingredients={ingredients.current}
                checkoutCancelled={checkoutCancelledHandler}
                checkoutContinued={checkoutContinuedHandler}
            />
            <Outlet />
        </>
    )
}

export default Checkout