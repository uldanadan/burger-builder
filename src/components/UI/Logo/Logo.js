import React from "react";
import './Logo.css'
import burgerLogo from '../../../assets/images/burger_logo.png'
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to={'/'} className={'Logo'}>
            {/*<img src="https://image.ibb.co/e3Pkkx/burger_logo.png" alt="MyBurger"/>*/}
            <img src={burgerLogo} alt="MyBurger"/>
        </Link>
    )
}

export default Logo