import { graphql, pageQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Layout from '../../src/components/layout';

const PostTemplate = ({ data }) => {
  console.log(data);
  const { title, content } = data.wpgraphql.posts.edges[0].node
  return (
      <Layout>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
      </Layout>
  );    
}


// PostTemplate.propTypes = {
//     data: PropTypes.object.isRequired,
//     edges: PropTypes.array
// };

export default PostTemplate;

export const query = graphql`
  query Blogs{
    wpgraphql {
      posts(where: {title: "an amazing"}) {
        edges {
          node {
            id
            title 
            content 
          }
        }
      } 
    }
  }
`