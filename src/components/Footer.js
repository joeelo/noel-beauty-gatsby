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

`

const RightContainer = styled.div`
    display: flex;
`

const FooterName = styled.h2`
    margin: 0;
    padding: 0; 
    font-family: Helvetica Neue, serif;
`

const Year = styled.sup`
    position: relative; 
    top: 10px;
    left: 2px;
`