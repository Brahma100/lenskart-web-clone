import React from 'react'
import './Navbar.css'
import {AppBar,Toolbar,Typography} from '@material-ui/core';


function Navbar() {
    return (
        <div className="navbar">
        <AppBar className="appbar" position="static">

            <div className="nav_items">
                <div className="nav_item">
                Eyeglasses
                </div>
             <div className="nav_item">
                Computer Glasses
                </div>
                <div className="nav_item">
                Kid Glasses
                </div>
                <div className="nav_item">
                Contact Lenes
                </div>
                <div className="nav_item">
                Sunglasses
                </div>
                <div className="nav_item">
                Home Eye-Test with Trial
                </div>
                <div className="nav_item">
                Store Locator
                </div>
                <div className="nav_item item_last">
                Eyeglasses at ₹599
                </div>
                
                <img src="https://static.lenskart.com/media/desktop/img/menu/icon_try_on.svg" alt=""/>
                <img src="https://static.lenskart.com/media/desktop/img/menu/blu-icon.svg" alt=""/>
                <img src="https://static.lenskart.com/media/desktop/img/menu/gold-icon.svg" alt=""/>
            </div>
        </AppBar>
        </div>
    )
}

export default Navbar
