import React from "react";
import styled from "styled-components";


//khaled ghareeb owns photo unsplash
const Home = (props) => {
    return (
        <PageContainer>
            {/* <img></img> */}
            <PhotoContainer>
                <Image src="images/model-main.jpeg" />
            </PhotoContainer>
            <TextContainer>
                <section>
                    Joanne Noel has been a fixture in the retail, media, and entertainment industry for over 25 years, providing classic beauty looks and flawless skin to the most revered actors, entertainers, and executives throughout her career. 
                </section>

            </TextContainer>
        </PageContainer>
    )
}

export default Home;

const PageContainer = styled.div`
    width: 80vw;
    margin: 50px auto 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-around;
`

const Image = styled.img`
    width: 100%;
`

const PhotoContainer = styled.div`
width: 45%;
background-color: green;
`

const TextContainer = styled.div`
    width: 45%;
    background-color: cyan;
`