import React, { useRef } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import Carousel from 'react-material-ui-carousel'
import YouTube from 'react-youtube';
import './Slider1.css'
import { ItemsCarousel } from 'react-items-carousel';
function Slider1(props) {
    const playerRef = useRef(null);


    var items = [
        'https://static1.lenskart.com/media/desktop/img/Sep20/VCSun_1912x360.png',
        'https://static1.lenskart.com/media/desktop/img/Sep20/21Sep/desktop_ipl_main_banner.jpg',
        'https://static1.lenskart.com/media/desktop/img/deskcric.gif',
        'https://static1.lenskart.com/media/desktop/img/Sep20/jjsun2500-1.jpg',
        'https://static1.lenskart.com/media/desktop/img/Sep20/16Sep/desktop_main_option3.jpg',
        'https://static1.lenskart.com/media/desktop/img/Sep20/desktopnewsize_1912x360.png'
        // {
        //     name: "Random Name #1",
        //     description: "Probably the most random thing you have ever seen!"
        // },
        // {
        //     name: "Random Name #2",
        //     description: "Hello World!"
        // }
    ]
    const opts = {
        size: '10',
        playerVars: {
            autoplay: 1,
            mute: true,
            loop: 5
        },
    };
    return (
        <>


            <div className="know_more">
                <h4>We are here to server</h4>
                <p>Lenskart is now delivering across India</p>
                <div className="know_more_link">
                    <p ><strong>Know More <ArrowForwardIosIcon style={{ fontSize: "1vw" }} /></strong></p>
                </div>

            </div>
            <div className="youtube_section">

                <YouTube className="video" videoId="pzGo1BLrLVM" opts={opts} />
                <img src="https://static1.lenskart.com/media/desktop/img/tribe.jpg" alt="" />

            </div>
            <div className="assistent_text">
                <p>Need Assistance in Buying? Talk to our Eyewear Expert. Give us a Call at : 1800-111-111</p>
            </div>

        </>

    )
}

// function Item(props)
// {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }
export default Slider1;