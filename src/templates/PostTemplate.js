import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Layout from '../../src/components/layout';

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost;
        console.log(this.props);
        // @TODO: STEP #5: Use title and content in Gatsby.
        return (
            <Layout>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </Layout>
        );
    }
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array
};

export default PostTemplate;

// @TODO: STEP #4: Get current WP Post data via ID.
export const pageQuery = graphql`
query MyQuery {
    wpgraphql {
      posts {
        edges {
          node {
            slug
            title 
            content
          }
        }
      }
    }
  }
`;