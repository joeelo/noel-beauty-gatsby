import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

const Template = ({data}) => {
    const post = data.markdownRemark
    console.log(data);
    return (
        <Layout>
            <Link to="/BlogPage" >Go back</Link>
            <h1> {post.frontmatter.title} </h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
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