import React from 'react';
import { render } from '@testing-library/react';
import { Intro } from './index';

describe('Intro', () => {
  it('should render correctly by default', () => {
    // Given / When
    const { container } = render(<Intro />);

    // Then
    expect(container).toMatchSnapshot();
  });
});
