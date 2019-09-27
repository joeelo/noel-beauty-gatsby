import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const VideoInstance = (props) => {
    
    const topValue = props.vidNumber * 100;

    const style = {

          width: "500px",
          height: "300px", 
    }

    console.log(props);
    return (
        <div>
            <h2>{props.video.title}</h2>
            <iframe style={style} 
                    src={props.video.src} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>    
            </iframe>

        </div>
    )
}

VideoInstance.defaultProps = {
    top: "0", 
    vidNumber: 1
}

VideoInstance.propTypes = {
    top: PropTypes.string,
    vidNumber: PropTypes.number
}

export default VideoInstance;
