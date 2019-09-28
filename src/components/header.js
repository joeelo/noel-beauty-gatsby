import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 150px;
    margin-left: 10px;
    font-family: Adamina, serif; 
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

const Header = (props) => {
    return (
        <HeaderContainer>
           <Link to="/"> <Heading> Noel Beauty </Heading></Link>
            <Subheading> Classic Beauty & Lifestyle</Subheading>
        </HeaderContainer>
    )
}

export default Header;