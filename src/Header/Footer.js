import React from 'react';
import './Footer.css';

import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import { Paper } from '@material-ui/core';

function Footer() {
    return (
        <>
        <div className="footer">
            <h3>Buy The Best Eyewear From Lenskart</h3>
            <p>Lenskart is the leading e-commerce portal for eyewear in India. It has revolutionised the eyewear industry in the country with its omni-channel approach. From an ever-growing number of offline stores across major cities in the country to innovative integration of technology while purchasing online, Lenskart caters to every customer with several deals and offers.</p>
            <p>A one-stop online solution for purchasing eyewear and its accessories, Lenskart delivers them right at your doorstep with convenient methods of payment. Sunglasses as well as eyeglasses are available for men and women in a diverse array of styles and trendy colours. If you want to try out contact lenses, pick the ones of your choice from the extensive variety of coloured contact lenses from our online store.</p>
        </div>
        <div className="follow_us">
            <p>FOLLOW US</p>
            <div className="follow_icons">
                <FacebookIcon/>
                <PinterestIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
            </div>
            <p>Download Lenskart App to buy <span style={{color: '#329c92'}}>Eyeglasses, Sunglasses and Contact Lenses.</span></p>
                <hr/>
        </div>
        </>
    )
}

export default Footer
