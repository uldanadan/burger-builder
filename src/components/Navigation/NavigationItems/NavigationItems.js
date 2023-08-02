import React from "react";
import './NavigationItems.css'
import {NavLink} from "react-router-dom";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
    return (
        <ul className={'NavigationItems'}>
            <NavigationItem to={'/'} end>Burger Builder</NavigationItem>
            <NavigationItem to={'/orders'} end>Orders</NavigationItem>
            <NavigationItem to={'/add-ingredient'} end>Add ingredient</NavigationItem>
            <NavigationItem to={'/ingredients'} end>Ingredients</NavigationItem>
        </ul>
    )
}

export default NavigationItems