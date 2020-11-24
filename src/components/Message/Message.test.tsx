import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import { Message, MessageProps } from './index';

expect.extend({ toMatchDiffSnapshot });

const props: MessageProps = {
  id: 'uuid',
  title: 'bla bli blou',
  body: 'body content',
};
describe('Message', () => {
  afterEach(cleanup);

  it('should render correctly by default', () => {
    // Given / When
    const { container } = render(<Message {...props} />);

    // Then
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with isPrivate true', () => {
    // Given / When
    const { container } = render(<Message {...props} isPrivate={true} />);

    // Then
    expect(container).toMatchSnapshot();
  });

  it('should toggle the expanded body when clicking the title', () => {
    // Given
    const { asFragment, getByTestId } = render(<Message {...props} />);
    const firstRender = asFragment();

    // When
    fireEvent.click(getByTestId('title'));
    const secondRender = asFragment();

    // Then
    expect(firstRender).toMatchDiffSnapshot(secondRender);
  });
});
