import React from "react";
import './NavigationItem.css'
import {NavLink} from "react-router-dom";


const NavigationItem = (props) => {
    return (
        <li className={'NavigationItem'}>
            <NavLink to={props.to} end={props.end}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default NavigationItem