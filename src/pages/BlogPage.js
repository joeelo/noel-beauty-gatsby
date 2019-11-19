import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby";
import { createPages } from "../../gatsby-node";
import PostTemplate from "../templates/PostTemplate";

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
        <li>
            <Link to={`/blog/${slug}`}> 
                <h2> 
                    {title}
                </h2>
            </Link>
        </li>
    )
})
    return (
        <div>
            {bullets}
        </div>
    )
}

export default BlogPage
