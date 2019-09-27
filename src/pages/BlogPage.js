import React from "react";
import Layout from "../components/layout"

const BlogPage = (graphQLQuery) => {
    const { data } = graphQLQuery;
    console.log(data);
    return (
        <Layout>

            <h1>Blog Page</h1>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogIndexQuery{
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        title 
                        author
                    }
                }
            }
        }
    }
`

export default BlogPage;