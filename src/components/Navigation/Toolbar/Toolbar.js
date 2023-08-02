import React from "react";
import './Toolbar.css';
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";


const Toolbar = () => {
    return (
        <header className={'Toolbar'}>
            <div className={'Toolbar-logo'}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default Toolbar