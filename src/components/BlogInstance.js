import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby";

const BlogInstance = (props) => {
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


export default BlogInstance;

const Container = styled.div`
    width: 100%;
    display: flex;
`

const Image = styled.img`
    width: 40vw;
    max-height: 60vw;
`

const BlogTitle = styled.h3`
    font-family: Adamina, serif;
    font-weight: 400;
`
