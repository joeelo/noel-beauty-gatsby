import React from "react";
import styled from "styled-components";

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <Foot>
            <h3>{date}</h3>
        </Foot>
    )
}

export default Footer;

const Foot = styled.div`
    display: flex;
    flex-shrink: 0;
`