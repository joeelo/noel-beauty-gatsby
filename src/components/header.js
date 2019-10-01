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
    flex-direction: column;
    text-align: center;
    font-family: Adamina, serif; 
    margin-bottom: 10px;
    flex-shrink: 0;
    margin: 3vh 0;
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