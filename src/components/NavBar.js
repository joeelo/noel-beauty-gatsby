import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Header from "./Header"

const NavContainer = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family: Adamina, serif;

    @media (max-width: 740px) {
        width: 90vw;
    }
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-around; 
    width: 100vw;
`

const NavItem = styled.span`
    padding: 3px; 
    padding: 0 10px 0 10px;
    font-family: Adamina, serif;
    color: black;
    font-size: 14px;
    text-decoration: none;

    :hover {
        border-bottom: 2px solid black;
    }
`

// Home page - about me - Resume- clients - portfolio - clients / celebrities - video - book/ lifestyle- blog- contact
const NavBar = (props) => {
    return (

        <NavContainer>
            <Nav>
                <Link to="/AboutPage"> <NavItem> About </NavItem></Link>
                <Link to="/PortfolioPage"> <NavItem> Portfolio </NavItem> </Link> 
                <Link to="/CelebrityPage"> <NavItem> Celebrity </NavItem> </Link>
                <Link to="/Blog"> <NavItem> Blog </NavItem> </Link>
                <Link to="/Videos"> <NavItem> Videos </NavItem> </Link>
                <Link to="/Contact"> <NavItem> Contact </NavItem> </Link>
            </Nav>
        </NavContainer>

    )
}

export default NavBar;