import React from 'react'
import './Layout.css'
import {Outlet} from "react-router-dom";
import Toolbar from "../Navigation/Toolbar/Toolbar";


const Layout = (props) => {
    return (
        <>
            <Toolbar />
            <main className={'Layout-Content'}>
                <Outlet />
            </main>
        </>
    )
}

export default Layout