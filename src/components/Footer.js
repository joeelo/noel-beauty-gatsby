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
                <ContactEmail><Anchor href="mailto:noelbeauty@gmail.com"> NoelBeauty@gmail.com </Anchor></ContactEmail>
                <LinkContainer>
                    <SocialLink> FB </SocialLink>
                    <SocialLink> <Anchor href="https://www.linkedin.com/in/joanne-noel-3008166/"> LKD </Anchor></SocialLink>
                    <SocialLink> INS </SocialLink>
                </LinkContainer>
            </RightContainer>
        </Foot>
    )
}

export default Footer;

const Anchor = styled.a`
    color: inherit;

    :vistied {
        color: black;
    }

    @media (max-width: 460px) {
        font-size; 12px;
    }
`

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

const SocialLink = styled.div`
    border-radius: 50%; 
    border: 1px solid black;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 16px;
    transition: .25s ease-in-out all; 
    margin: 0 5px;

    :hover {
        background-color: black;
        color: white;
    }

    @media (max-width: 460px) {
        font-size: 12px;
        width: 25px;
        height: 25px;
        font-size: 8px;
    }
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