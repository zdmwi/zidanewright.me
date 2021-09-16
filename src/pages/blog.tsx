import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Query } from '../../graphql-types';

interface Props {
  data: Query;
}

const BlogPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query GetBlogPostNames {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
