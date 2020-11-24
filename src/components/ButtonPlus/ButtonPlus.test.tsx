import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { ButtonPlus, ButtonPlusProps } from './index';

const props: ButtonPlusProps = {
  onClick: jest.fn()
};
describe('ButtonPlus', () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it('should render correctly by default', () => {
    // Given / When
    const { container } = render(<ButtonPlus {...props} />);

    // Then
    expect(container).toMatchSnapshot();
  });

  it('should handle click', () => {
    // Given
    const { getByTestId } = render(<ButtonPlus {...props} />);

    // When
    fireEvent.click(getByTestId('plus-button'));

    // Then
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should disable the click action', () => {
    // Given
    const { getByTestId } = render(<ButtonPlus {...props} disabled={true} />);

    // When
    fireEvent.click(getByTestId('plus-button'));

    // Then
    expect(props.onClick).not.toHaveBeenCalled();
  });
});
