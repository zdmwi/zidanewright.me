import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import { Query } from '../../../graphql-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface Props {
  data: Query;
}

const BlogPost: React.FC<Props> = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
