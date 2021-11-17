import React,{useState} from 'react'
import './Categories.css';
import Category_drop from './Category_drop';


// {
//     title:'Air Light Weight',
//     description:'Powered Lenes',
//     price:"₹599"
// },

function Categories({img,category,drop}) {
    const [toggle,setToggle]=useState(false);
    // const [Key,setKey]=useState(null);
   console.log("Images",img);


    return (
<>      <div className="dropdown">
            <div className="dropbtn">
                <img src={img} alt=""/>
                <p>{category}</p>
                <div className="dropdown-content">
                    {
                        drop.map((item,i)=>{
                        return(
                            <Category_drop key={i} title={item.title} description={item.description} price={item.price} />
                        );
                    })
                    }
                </div>
            </div>
        </div>
        
</>
 
    )
}

export default Categories
