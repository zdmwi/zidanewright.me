import React from 'react';
import { render } from '@testing-library/react';

import { PureHeader as Header } from './header';
import { GetSiteTitleQuery } from '../../graphql-types';

describe('Header', () => {
  it('does not crash when rendered', () => {
    const data: GetSiteTitleQuery = {
      site: {
        siteMetadata: {
          title: 'Gatsby Starter Blog',
        },
      },
    };
    const { getByTestId } = render(<Header data={data} />);
    expect(getByTestId('header-test')).toBeInTheDocument();
  });
});
