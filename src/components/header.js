import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";


const Header = (props) => {
    return (
        <HeaderContainer>
           <Link to="/"> <Heading> Noel Beauty </Heading></Link>
            <Subheading> Classic Beauty & Lifestyle</Subheading>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 20vh;
    margin-left: 10px;
    font-family: Adamina, serif; 
    flex-shrink: 0;
`

const Heading = styled.h1`
    margin: 0;
    font-size: 3em;
    color: black;
    font-faily: adamina, serif;
`

const Subheading = styled.h2`
    margin: 0;
    
`