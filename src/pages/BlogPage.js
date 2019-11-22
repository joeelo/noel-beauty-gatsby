import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        wpgraphql {
            posts { 
                edges {
                    node {
                        title 
                        slug 
                        date
                    }    
                }
            }
        }
    }
`)

let bullets = data.wpgraphql.posts.edges.map(item => {
    const {title, date, slug} = item.node

    return (
        <div key={slug}>
            <Link to={`/blog/${slug}`}> 
                <h2> {title} </h2>
            </Link>
                <span> {date} </span>
        </div>
    )
})
    return (
        <Layout>
            <div>
                {bullets}
            </div>
        </Layout>
    )
}

export default BlogPage