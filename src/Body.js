import React from 'react'
import './Body.css'
import Categories from './Component/Categories';
import Slider1 from './Component/Slider1'
import Slider_main from './Component/Slider_main';

function Body() {
    const imgs=[
        {
            img:'https://static1.lenskart.com/media/desktop/img/14-June-20/eyeicon.jpg',
            category:'Sunglasses',
            drop:[
                {
                    title:'Air Light Weight',
                    description:'Powered Lenes',
                    price:"₹599"
                },
                {
                    title:'Premium Lenes',
                    description:'Powered Lenes',
                    price:"₹3599"
                },
                {
                    title:'Air Light Weight',
                    description:'Powered Lenes',
                    price:"₹599"
                },
            ]
        },
        {
            img:'https://static1.lenskart.com/media/desktop/img/14-June-20/sunicon.jpg',
            category:'Sunglasses',
            drop:[
                {
                    title:'Air Light Weight',
                    description:'Powered Lenes',
                    price:"₹599"
                },
                {
                    title:'Premium Lenes',
                    description:'Powered Lenes',
                    price:"₹3599"
                },
                {
                    title:'Air Light Weight',
                    description:'Powered Lenes',
                    price:"₹599"
                },
            ]
        },
        {
            img:'https://static1.lenskart.com/media/desktop/img/14-June-20/phonepcicon.jpg',
            category:'Sunglasses',
            drop:[
                {
                    title:'Air Light Weight',
                    description:'Powered Lenes',
                    price:"₹599"
                },
                {
                    title:'Premium Lenes',
                    description:'Powered Lenes',
                    price:"₹3599"
                },
                {
                    title:'Air Light Weight',
                    description:'Powered Lenes',
                    price:"₹599"
                },
            ]
        },
        {
            img:'https://static1.lenskart.com/media/desktop/img/14-June-20/clicon.jpg',
            category:'Sunglasses',
            drop:[
                {
                    title:'Air Light Weight',
                    description:'Powered Lenes',
                    price:"₹599"
                },
                {
                    title:'Premium Lenes',
                    description:'Powered Lenes',
                    price:"₹3599"
                },
                {
                    title:'Air Light Weight',
                    description:'Powered Lenes',
                    price:"₹599"
                },
            ]
        },
        {
            img:'https://static1.lenskart.com/media/desktop/img/14-June-20/thinoptics-icon.jpg',
            category:'Sunglasses',
            drop:[
                {
                    title:'Air Light Weight',
                    description:'Powered Lenes',
                    price:"₹599"
                },
                {
                    title:'Premium Lenes',
                    description:'Powered Lenes',
                    price:"₹3599"
                },
                {
                    title:'Air Light Weight',
                    description:'Powered Lenes',
                    price:"₹599"
                },
            ]
        },
        {
            img:'https://static1.lenskart.com/media/desktop/img/14-June-20/599icon.jpg',
            category:'Sunglasses',
            drop:[
                {
                    title:'Air Light Weight',
                    description:'Powered Lenes',
                    price:"₹599"
                },
                {
                    title:'Premium Lenes',
                    description:'Powered Lenes',
                    price:"₹3599"
                },
                {
                    title:'Air Light Weight',
                    description:'Powered Lenes',
                    price:"₹599"
                },
            ]
        }
    ]
    
    return (
        <div>
        <div className="categories">

        {imgs.map((item)=>{
            return(<Categories key={item.img.toString()}  img={item.img} category={item.category} drop={item.drop}/>);
        })}
            
        </div>
        <Slider1 />
        <Slider_main/>
        <Slider_main/>
        <Slider_main/>
        <Slider_main/>
        <Slider_main/>
        <Slider_main/>
        </div>

    )
}

export default Body
