import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import {SocialLink, Anchor} from "../styled-components/styled-social-links";

const ContactPage = (props) => {
    return (
        <Layout>
            <PageContainer>

                <ContactSpan>  Contact Joanne Noel for Beauty tips and advice, or if you want to be featured in upcoming animations/videos write a quick message!   
                </ContactSpan>

                <ContactForm>
                    <Input type="text" name="name" placeholder="name"/>
                    <Input type="text" name="email" placeholder="email"/>
                    <TextArea name="content" placeholder="write your message here"/>
                    <button> submit </button>
                </ContactForm>

                <LinkContainer>
                    <ContactSocialLink> <Anchor href="#" target="_blank"> FB </Anchor></ContactSocialLink>
                    <ContactSocialLink> <Anchor href="https://www.linkedin.com/in/joanne-noel-3008166/" target="_blank"> LKD </Anchor></ContactSocialLink>
                    <ContactSocialLink> <Anchor href="https://www.instagram.com/joannenoel/?hl=en" target="_blank"> INS </Anchor></ContactSocialLink>
                </LinkContainer>
            </PageContainer>
        </Layout>
    )
}

export default ContactPage;

const PageContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    justify-content: space-around;
`

const ContactSpan = styled.span`
    font-family: Helvetica, sans-serfif;
    text-decoration: line-height: 1.25em;

    @media (max-width: 460px) {
        font-size: 12px;
    }
`

const LinkContainer = styled.div`
    display: flex;
`

const ContactSocialLink = styled(SocialLink)`
    height: 80px;
    width: 80px;

    @media (max-width: 460px) {
        height: 40px; 
        width: 40px;
    }
`

const ContactAnchor = styled(Anchor)`
    
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Input = styled.input`
    border: 1px solid black;
    margin: 5px 0; 
    width: 40vw;
`

const TextArea = styled.textarea`
    border: 1px solid black;
    width: 100%;
    margin: 5px 0;
`