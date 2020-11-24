import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import { MessagesList } from './index';
import { messages } from '../../fixtures/messages';

expect.extend({ toMatchDiffSnapshot });

describe('MessagesList', () => {
  afterEach(cleanup);

  it('should render an empty message information and no message component', () => {
    // Given / When
    const { getByTestId, queryAllByTestId } = render(
      <MessagesList messages={[]} />,
    );

    // Then
    expect(getByTestId('counter').textContent).toBe('The list is empty!');
    expect(queryAllByTestId('message-accordion')).toHaveLength(0)
  });

  it('should render the messages', () => {
    // Given / When
    const { getAllByTestId } = render(<MessagesList messages={messages} />);

    // Then
    expect(getAllByTestId('message-accordion')).toHaveLength(messages.length)
    expect(getAllByTestId('message-accordion')).toMatchSnapshot();
  });

  it('should display the number of messages', () => {
    // Given / When
    const { getByTestId } = render(<MessagesList messages={messages} />);

    // Then
    expect(getByTestId('counter').textContent).toBe(`${messages.length} messages`);
  });
});
