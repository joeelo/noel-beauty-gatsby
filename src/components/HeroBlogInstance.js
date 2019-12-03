import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby";

const HeroBlogInstance = (props) => {
    const { title, featuredImage, date, slug } = props;
    return (
        <Container>
            <Link to={`/blog/${slug}`}>
                    <Image src={featuredImage.altText}/>
                    <BlogTitle>{title}</BlogTitle>
            </Link>
        </Container>
    )
}


export default HeroBlogInstance;

const Container = styled.div`
    width: 100vw;
    position: relative;
    display: flex;
    overflow: none;
    right: 10vw;
`

const Image = styled.img`
    width: 100%;
    max-height: 60vh;
`

const BlogTitle = styled.h3`
    font-family: Adamina, serif;
    font-weight: 400;
`
