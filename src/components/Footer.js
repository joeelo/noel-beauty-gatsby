import React from "react";

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div>
            <h3>{date}</h3>
        </div>
    )
}

export default Footer;