import React from "react";
import styled from "styled-components";
import {SocialLink, Anchor}  from "../styled-components/styled-social-links";

const Footer = () => {
    const dateYear = new Date().getFullYear();
    return (
        <Foot>
            <LeftContainer>

                <FooterName> JoAnne Noel </FooterName>
                <Year>{dateYear}</Year>
            </LeftContainer>

            <RightContainer>
                <ContactEmail><Anchor href="mailto:noelbeauty@gmail.com"> NoelBeauty@gmail.com </Anchor></ContactEmail>
                <LinkContainer>
                    <SocialLink> <FooterAnchor href="https://www.facebook.com/JoannenoelNYC"> FB </FooterAnchor> </SocialLink>
                    <SocialLink> <FooterAnchor href="https://www.linkedin.com/in/joanne-noel-3008166/"> LKD </FooterAnchor></SocialLink>
                    <SocialLink> <FooterAnchor href="https://www.instagram.com/joannenoel/"> INS </FooterAnchor></SocialLink>
                </LinkContainer>
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
    margin-top: 15vh;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const LeftContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: flex-end;
    align-items: center;
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

const LinkContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

`

const ContactEmail = styled.span`
    font-size: 18px;
    margin-bottom: 5px;

    :hover {
        text-decoration: underline;
    }

    @media (max-width: 460px) {
        font-size: 12px;
    }
`

const FooterAnchor = styled(Anchor)`
    font-size: 12px; 
`
