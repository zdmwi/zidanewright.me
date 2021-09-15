import React from 'react';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  return <div data-testid="header-test">{siteTitle}</div>;
};

export default Header;
