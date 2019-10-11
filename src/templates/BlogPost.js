import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

const Template = ({data}) => {
    const post = data.markdownRemark
    console.log(data);
    return (
        <Layout>
            <PageContainer>
                <Link to="/BlogPage" >Go back</Link>
                <h1> {post.frontmatter.title} </h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </PageContainer>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq : $path }}) {
            html 
            frontmatter {
                path
                title
                author
            }
        }
    }
`

export default Template;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`