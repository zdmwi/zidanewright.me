import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Query } from '../../graphql-types';

interface Props {
  data: Query;
}

export const PureHeader: React.FC<Props> = ({ data }) => {
  return <div data-testid="header-test">{data.site.siteMetadata.title}</div>;
};

export const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query GetTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <PureHeader data={data} />;
};

export default Header;
