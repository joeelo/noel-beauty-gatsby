import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    width: 15vw;
    margin: 1%;
    padding-bottom: 100px;
`

const ImageContainer = styled.div`
    width: 100%;
    height: 15vw;
    margin: 1%;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const BlogTitle = styled.h3`
    font-family: Adamina, serif;
    font-weight: 400;
`

const BlogInstance = (props) => {
    const { blog } = props;
    console.log(blog);
    return (
        <Container>
            
            <ImageContainer>
                <Image src={blog.img}/>
                <div>
                    <BlogTitle>{blog.title}</BlogTitle>
                </div>
            </ImageContainer>
        </Container>
    )
}


export default BlogInstance;