import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components"
import Layout from "../components/layout";
import BlogInstance from "../components/BlogInstance";
import HeroBlogInstance from '../components/HeroBlogInstance';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        wpgraphql {
            posts { 
                edges {
                    node {
                        id
                        title 
                        slug 
                        date
                        featuredImage {
                            link
                            altText
                        }
                    }    
                }
            }
        }
    }
`)

console.log(data);


let bullets = data.wpgraphql.posts.edges.map((item, index) => {
    const {title, date, slug, featuredImage} = item.node
    console.log(index);
    // hero or regular blog ternary
    return (

        index === 0 || index % 7 === 0 ?

        <HeroBlogInstance 
            key={slug}
            slug={slug}
            title={title}
            date={date}
            featuredImage={featuredImage}
        />
        : 


        <BlogInstance 
            key={slug}
            slug={slug}
            title={title}
            date={date}
            featuredImage={featuredImage}
        />
    )
})
    return (
        <Layout>
            <BlogContainer>
                {bullets}
            </BlogContainer>
        </Layout>
    )
}

export default BlogPage

const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`

{
    /* <div key={slug}>
<Link to={`/blog/${slug}`}> 
    <img src={featuredImage.altText}/>
    <h2> {title} </h2>
</Link>
    <span> {date} </span>
</div> */
}

