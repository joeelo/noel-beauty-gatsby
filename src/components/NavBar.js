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
                <Link to="/CelebrityPage"> <NavItem> Celebrity </NavItem> </Link>
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
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family: Adamina, serif;
    margin-bottom: 5vh;
    height: 5vh;

    @media (max-width: 740px) {
        
    }
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-around; 
    width: 100%;
`

const NavItem = styled.span`
    padding: 3px; 
    padding: 0 10px 0 10px;
    font-family: Adamina, serif;
    color: black;
    font-size: 14px;
    text-decoration: none;
    font-size: 18px;

    :hover {
        border-bottom: 2px solid black;
    }

    @media (max-width: 600px) {
        font-size: 12px;
    }
`