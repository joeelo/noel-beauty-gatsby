import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby";

const HeroBlogInstance = (props) => {
	const { title, featuredImage, date, slug } = props;
    console.log(props);
	return (
		<Container>
			<Link to={`/blog/${slug}`}>
				{ featuredImage &&   <Image src={featuredImage.mediaItemUrl}/> }
				<BlogTitle>{title}</BlogTitle>
			</Link>
		</Container>
	)
}


export default HeroBlogInstance;

const Container = styled.div`
    width: 100%;
    display: flex;
    overflow: none;
    text-align: center;
    margin-bottom: 10vh;
`

const Image = styled.img`
    width: 100%;
    max-height: 60vh;
`

const BlogTitle = styled.h3`
    font-family: Adamina, serif;
    font-weight: 400;
    color: black;
    margin-top: -20px;
`
