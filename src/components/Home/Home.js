import React, { useEffect } from 'react';
import './global.css';import React from 'react';

const VideoBackground = () => {
    return (
        <div className="video-background">
            <video autoPlay muted loop id="myVideo">
                <source src="your-video.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="content">
                {/* Your content here */}
            </div>
        </div>
    );
};

export default VideoBackground;
