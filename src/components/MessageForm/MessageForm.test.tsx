import React from 'react';
import { render, cleanup, fireEvent, within } from '@testing-library/react';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import { MessageForm, MessageFormProps } from './index';

expect.extend({ toMatchDiffSnapshot });

const props: MessageFormProps = {
  onSubmit: jest.fn(),
};

describe('MessagesList', () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it('should render the form correctly by default', () => {
    // Given / When
    const { container } = render(<MessageForm {...props} />);

    // Then
    expect(container).toMatchSnapshot();
  });

  it('should enable the submit button when fields have been filled', () => {
    // Given
    const { asFragment, getByTestId } = render(<MessageForm {...props} />);
    const firstRender = asFragment().querySelector('button');

    // When
    fireEvent.change(
      getByTestId('input-title').querySelector('input') as HTMLInputElement,
      { target: { value: 'title' } },
    );
    fireEvent.change(
      getByTestId('input-message').querySelector(
        'textarea',
      ) as HTMLTextAreaElement,
      { target: { value: 'message' } },
    );
    const secondRender = asFragment().querySelector('button');

    // Then
    expect(firstRender).toMatchDiffSnapshot(secondRender);
  });

  it('should submit the filled data', () => {
    // Given
    const { getByTestId } = render(<MessageForm {...props} />);
    const inputTitle = getByTestId('input-title').querySelector(
      'input',
    ) as HTMLInputElement;
    const inputMessage = getByTestId('input-message').querySelector(
      'textarea',
    ) as HTMLTextAreaElement;
    const buttonSubmit = getByTestId('submit-button');

    // When
    const title = 'My awesome title';
    const message = 'My awesome message';
    fireEvent.change(inputTitle, { target: { value: title } });
    fireEvent.change(inputMessage, { target: { value: message } });
    fireEvent.click(buttonSubmit);

    // Then
    expect(props.onSubmit).toHaveBeenCalledTimes(1);
    expect(props.onSubmit).toHaveBeenLastCalledWith({ title, message });
  });
});
