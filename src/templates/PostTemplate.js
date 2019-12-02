import { graphql, pageQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../../src/components/layout';

export const query = graphql`
  query($slug: String!){
    wpgraphql {
      postBy(slug: $slug) {
        id
        title 
        content 
      } 
    }
  }
`

const PostTemplate = ({ data }) => {
  const { title, content } = data.wpgraphql.postBy

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

