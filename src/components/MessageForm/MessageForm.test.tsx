import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MessageForm } from './index';

describe('MessagesList', () => {
  afterEach(cleanup);

  it('should render the form correctly', () => {
    // Given / When
    const { container } = render(<MessageForm />);

    // Then
    // expect(container).toMatchSnapshot();
  });

  it('enable the submit button when fields have been filled', () => {
    // Given
    const { container } = render(<MessageForm />);

    // When

    // Then
  });

  it('submit the filled data', () => {
    // Given
    const { container } = render(<MessageForm />);

    // When

    // Then
  });
});
