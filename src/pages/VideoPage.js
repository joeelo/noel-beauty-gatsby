import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import VideoInstance from "../components/VideoInstance";

const videos = [
    {title: "something", src:"https://www.youtube.com/embed/8yo1A9EULQQ"}, 
    {title: "something else", src: "https://www.youtube.com/embed/ri-BM1i4WSs"}
];

const VideoPage = (props) => {
    
    return (
        <Layout>
            <VideoContainer>
                {videos.map((video, index) => {
                    return <VideoInstance key={index} video={video} vidNumber={index}/>
                })}
            </VideoContainer>
        </Layout>
    )
}

export default VideoPage;

const VideoContainer = styled.div`
    display: flex;
    width: 80vw;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
`