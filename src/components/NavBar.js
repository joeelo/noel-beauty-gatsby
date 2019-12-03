import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";


// Home page - about me - Resume- clients - portfolio - clients / celebrities - video - book/ lifestyle- blog- contact
const NavBar = (props) => {
    return (
        <NavContainer>
            <Nav>
                <Link to="/AboutPage"> <NavItem> About </NavItem></Link>
                <Link to="/PortfolioPage"> <NavItem> Portfolio </NavItem> </Link> 
                <Link to="/BlogPage"> <NavItem> Blog </NavItem> </Link>
                <Link to="/VideoPage"> <NavItem> Videos </NavItem> </Link>
                <Link to="/ContactPage"> <NavItem> Contact </NavItem> </Link>
            </Nav>
        </NavContainer>

    )
}

export default NavBar;

const NavContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 1vh auto 5vh auto;
    height: 5vh;

    @media (max-width: 420px) {
        width: 100vw;
        margin-left: -10vw;
    }
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-around; 
    width: 100%;
`

const NavItem = styled.span`
    padding: 0 10px;
    font-family: Garamond, serif;
    font-weight: 400;
    color: black;
    font-size: 18px;
    text-decoration: none;

    :hover {
        border-bottom: 2px solid black;
    }

    @media (max-width: 500px) {
        font-size: 14px;
        padding: 0 5px;
    }
`