import styled from "styled-components";

const SocialLink = styled.div`
    border-radius: 50%; 
    border: 1px solid black;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    transition: .25s ease-in-out all; 
    margin: 0 5px;

    :hover {
        background-color: black;
        color: white;
    }

    @media (max-width: 460px) {
        font-size: 12px;
        width: 30px;
        height: 30px;
        font-size: 8px;
    }
`

const Anchor = styled.a`
    color: inherit;

    :visitied {
        color: black;
    }

    @media (max-width: 460px) {
        font-size: 9px;
    }
`

export {
    SocialLink,
    Anchor
};
