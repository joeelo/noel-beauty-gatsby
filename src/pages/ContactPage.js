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
                    <ContactHeading> Contact JoAnne</ContactHeading>
                    <ContactSpan>  
                        Write a message for Beauty tips and advice, to be featured in upcoming animations/videos, or to simply reach out!  
                    </ContactSpan>
                    <ContactForm onSubmit={this.handleSubmit}>
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
                        <SubmitButton> submit </SubmitButton>
                    </ContactForm>

                    <LinkContainer>
                        <Anchor 
                            href="#" 
                            target="_blank"
                        >
                            <ContactSocialLink>  FB </ContactSocialLink>
                        </Anchor>

                        <Anchor 
                            href="https://www.linkedin.com/in/joanne-noel-3008166/" 
                            target="_blank"
                        >
                            <ContactSocialLink>  LKD </ContactSocialLink>
                        </Anchor>

                        <Anchor 
                            href="https://www.instagram.com/joannenoel/?hl=en" 
                            target="_blank"
                        >
                            <ContactSocialLink>  INS </ContactSocialLink>
                        </Anchor>
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
    text-align: center;
`

const ContactHeading = styled.span`
    font-size: 36px;
    border-bottom: 2px solid black; 
    padding-bottom: 3px;
    margin: 50px auto 25px auto;
    min-width: 260px;
`
    
const ContactSpan = styled.span`
    font-family: Helvetica, sans-serfif;
    font-size: 12px;
    text-align: center;
    width: 40vw;
    margin: 0 auto;
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;;
    padding: 10px;
    margin-top: 10px;
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

const Input = styled.input`
    border: 1px solid grey;
    margin: 15px 0; 
    width: 40vw;
    padding: 10px;
    width: 50%;
    border-radius: 3px;
    font-size: 14px;
`

const TextArea = styled.textarea`
    border: 1px solid grey;
    width: 50%;
    margin: 15px 0;
    height: 150px;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 14px;
`

const SubmitButton = styled.button`
    background-color: white;
    padding: 5px 25px; 
    border-radius: 3px;
    font-size: 14px;
    border-collapse: separate;
    transition: .3s ease-in-out;
    background-color: black;
    color: white;
    font-weight: 500;
    
    :hover {
        box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
        background-color: rgb(30, 30, 30);
    }
`