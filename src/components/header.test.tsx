import React from 'react';
import { render } from '@testing-library/react';

import { PureHeader as Header } from './header';

describe('Header', () => {
  it('does not crash when rendered', () => {
    const data: any = {
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
