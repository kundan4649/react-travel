import React, { useEffect } from 'react';
import axios from 'axios';
import VideoBackground from './VideoBackground'; // Import the VideoBackground component

const Hello = () => {

    useEffect(()=>{
        //const posts = axios.get('http://localhost/server/wordpress/wp-json/wp/v2/posts');
        console.log('ssss');
    });
    return (
        <>
        <div className='test'>
        <VideoBackground />
       {/* <h1> Hello Word</h1>
            <video muted="" loop="" autoplay="" playsinline="" width="100%" height="100%" src="http://localhost/wp-travel/wordpress/wp-content/uploads/2024/03/Cover800x312_darken_3mb.mp4" type="video/mp4" data-gtm-vis-has-fired10087461_810="1">
                </video>
    <h1> Hello Word2 </h1>*/}
                </div>
    
    </>
    );
}

export default Hello;