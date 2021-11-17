import React from 'react'
import './Header_mid.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from "@material-ui/icons/Search";
import App from './../App';

function Header_mid() {
    return (
        <div className="head_m">
            <div className="brand">
                <img src="https://static1.lenskart.com/media/desktop/img/lk-logo-f.png" alt=""/>
            </div>
            <form className="search">
                <input placeholder="What are you looking for?" type="text"/>
                <SearchIcon style={{color:'#888',fontSize:'1.5vw'}}/>

            </form>
            <div className="user_nav">
                <div className="signup">
                    <a href="">Sign In & Sign Up</a>
                </div>
                <div className="track_order">
                    <a href="">Track Order</a>
                </div>
                <div className="shortlist">
                
                    <a href=""><FavoriteBorderIcon style={{color:'red',fontSize:'1.5vw'}}/>Shortlist</a>
                </div>
                <div className="cart">
                
                    <a href=""><AddShoppingCartIcon style={{color:'blue',fontSize:'1.5vw'}}/>Cart</a>
                </div>
            </div>
        </div>
    )
}

export default Header_mid
