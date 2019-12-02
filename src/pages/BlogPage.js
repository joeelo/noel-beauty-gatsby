import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import BlogInstance from "../components/BlogInstance";

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
    return (

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
            <div>
                {bullets}
            </div>
        </Layout>
    )
}

export default BlogPage

{
    /* <div key={slug}>
<Link to={`/blog/${slug}`}> 
    <img src={featuredImage.altText}/>
    <h2> {title} </h2>
</Link>
    <span> {date} </span>
</div> */
}

