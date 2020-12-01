import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { FloatingButton, FloatingButtonProps, IconVariant } from './index';

const props: FloatingButtonProps = {
  onClick: jest.fn(),
  icon: IconVariant.ADD,
};
describe('ButtonPlus', () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it('should render correctly with add variant', () => {
    // Given / When
    const { container } = render(<FloatingButton {...props} />);

    // Then
    expect(container).toMatchSnapshot();
  });

  it('should render correctly with home variant', () => {
    // Given / When
    const { container } = render(
      <FloatingButton {...props} icon={IconVariant.HOME} />,
    );

    // Then
    expect(container).toMatchSnapshot();
  });

  it('should handle click', () => {
    // Given
    const { getByTestId } = render(<FloatingButton {...props} />);

    // When
    fireEvent.click(getByTestId('floating-button'));

    // Then
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should disable the click action', () => {
    // Given
    const { getByTestId } = render(
      <FloatingButton {...props} disabled={true} />,
    );

    // When
    fireEvent.click(getByTestId('floating-button'));

    // Then
    expect(props.onClick).not.toHaveBeenCalled();
  });
});
