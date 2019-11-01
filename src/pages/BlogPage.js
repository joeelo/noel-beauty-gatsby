import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import React from 'react'
import { createPages } from "../../gatsby-node";
import PostTemplate from "../templates/PostTemplate";


const data =  useStaticQuery(graphql`
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

let bullets = data.query.wpgraphql.posts.edges.map(item => {
    const { title, date, slug } = item.node;
    createPages({
        component: PostTemplate, 
        path: `/blog/${slug}`,
        context: {
            slug: slug
        }
    })
})

const BlogPage = () => {
    console.log(bullets);
    return (
        <div>
            Working
        </div>
    )
}

export default BlogPage
