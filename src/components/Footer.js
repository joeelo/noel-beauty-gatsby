import React from "react";
import styled from "styled-components";

const Footer = () => {
    const dateYear = new Date().getFullYear();
    return (
        <Foot>
            <LeftContainer>

                <FooterName> JoAnne Noel </FooterName>
                <Year>{dateYear}</Year>
            </LeftContainer>

            <RightContainer>
                <SocialLink> FB </SocialLink>
            </RightContainer>
        </Foot>
    )
}

export default Footer;

const Foot = styled.div`
    border-top: 1px solid lightgrey;
    display: flex;
    flex-shrink: 0;
    width: 100vw;
    position: relative;
    right: 10vw;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const LeftContainer = styled.div`
    display: flex;
    width: 50%;

`

const RightContainer = styled.div`
    display: flex;
    width: 50%;

`

const FooterName = styled.span`
    margin: 0;
    padding: 0; 
    font-family: Helvetica Neue, serif;
    font-size: 24px;
    font-weight: 300;

    @media (max-width: 740px) {
        font-size: 16px;
    }
`

const Year = styled.sup`
    position: relative; 
    top: 10px;
    left: 2px;
    font-size: 10px;
`

const SocialLink = styled.div`
    border-radius: 50%; 
    border: 1px solid lightgrey;
    padding: 3px;

`