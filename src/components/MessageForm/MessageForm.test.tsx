import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import { MessageForm, MessageFormProps } from './index';
import { fillForm } from '../../test-utils';

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

  it('should render the form correctly wih a loader', () => {
    // Given / When
    const { container } = render(<MessageForm {...props} loading={true} />);

    // Then
    expect(container).toMatchSnapshot();
  });

  it('should enable the submit button when fields have been filled', async () => {
    // Given
    const { asFragment, getByTestId } = render(<MessageForm {...props} />);
    const firstRender = asFragment().querySelector('button');

    // When
    await fillForm(getByTestId, { title: "title", message: "message" }, false);
    const secondRender = asFragment().querySelector('button');

    // Then
    expect(firstRender).toMatchDiffSnapshot(secondRender);
  });

  it('should submit the filled data', async () => {
    // Given
    const { getByTestId } = render(<MessageForm {...props} />);

    // When
    const title = 'My awesome title';
    const message = 'My awesome message';
    await fillForm(getByTestId, { title, message }, true);

    // Then
    expect(props.onSubmit).toHaveBeenCalledTimes(1);
    expect(props.onSubmit).toHaveBeenLastCalledWith({ title, message });
  });
});
