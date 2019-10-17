import React, { Component } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import {SocialLink, Anchor} from "../styled-components/styled-social-links";

class ContactPage extends Component {

    state = {
        name: "", 
        email: "", 
        content: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return (
            <Layout>
                <PageContainer>
                    <ContactForm onSubmit={this.handleSubmit}>
                        <ContactSpan>  
                            Contact Joanne Noel for Beauty tips and advice, or to be featured in upcoming animations/videos write a quick message!   
                        </ContactSpan>
                        <Input 
                            type="text" 
                            name="name" 
                            onChange={this.handleChange} 
                            placeholder="name" 
                            value={this.state.name}
                        />
                        <Input 
                            type="text" name="email" 
                            onChange={this.handleChange} 
                            placeholder="email" 
                            value={this.state.email}
                        />
                        <TextArea 
                            name="content" 
                            placeholder="write your message here" 
                            onChange={this.handleChange} 
                            value={this.state.content}
                        />
                    <button> submit </button>
                    </ContactForm>
    
                    <LinkContainer>
                        <ContactSocialLink> <Anchor href="#" target="_blank"> FB </Anchor></ContactSocialLink>
                        <Anchor href="https://www.linkedin.com/in/joanne-noel-3008166/" target="_blank"><ContactSocialLink>  LKD </ContactSocialLink></Anchor>
                        <ContactSocialLink> <Anchor href="https://www.instagram.com/joannenoel/?hl=en" target="_blank"> INS </Anchor></ContactSocialLink>
                    </LinkContainer>
                </PageContainer>
            </Layout>
        )
    }
}


export default ContactPage;

const PageContainer = styled.div`
width: 100vw;
display: flex;
min-height: 400px;
justify-content: space-around;
flex-direction: column;
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 4vh;
`

const ContactSpan = styled.span`
    font-family: Helvetica, sans-serfif;
    text-decoration: line-height: 1.25em;
    grid-column-start: 2;
    font-size: 18px;
`

const LinkContainer = styled.div`
    display: flex;
    margin-top: 20px;
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


const Input = styled.input`
    border: 1px solid black;
    margin: 10px 0; 
    width: 40vw;
    padding-left: 10px;
    width: 75%;
`

const TextArea = styled.textarea`
    border: 1px solid black;
    width: 100%;
    margin: 5px 0;
    height: 200px;
    padding: 5px 10px;
`

