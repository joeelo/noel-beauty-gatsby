import React from "react";
import Layout from "../components/layout"
import { graphql, Link } from "gatsby";

const BlogPage = (graphQLQuery) => {
    const { data } = graphQLQuery;
    console.log(data);
    return (
        <Layout>

            <h1>Blog Page</h1>
            {data.allMarkdownRemark.edges.map(post => (
                <div key={post.node.id}>
                    <h3>{post.node.frontmatter.title}</h3>
                    <Link to={post.node.frontmatter.path}> Read More </Link>
                </div>
            ))}
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogIndexQuery{
        allMarkdownRemark{
            edges{
                node{
                    id
                    frontmatter{
                        path
                        title 
                        author
                    }
                }
            }
        }
    }
`

export default BlogPage;