import React from 'react';
import { render } from '@testing-library/react';

import Header from './header';

describe('Header', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Header siteTitle="Hello" />);
    expect(getByTestId('header-test')).toHaveTextContent('Hello');
  });
});
