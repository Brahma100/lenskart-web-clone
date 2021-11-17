import React from 'react'
import './Category_drop.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Category_drop({title,description,price}) {
    return (
        <div className="cat_drop">
        <hr/>
            <div className="row1">
                <p><strong>{title}</strong></p>
                <p>Starting</p>

            </div>
            <ArrowForwardIosIcon className="arrow_icon" style={{fontSize:'1.5vw',color:'green'}}/>
            <div className="row2">
            <p>{description}</p>
            <p><strong>{price}</strong></p>
            </div>
        </div>
    )
}

export default Category_drop
