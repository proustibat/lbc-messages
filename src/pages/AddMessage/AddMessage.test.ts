import {
  act,
  fireEvent,
  render,
  cleanup,
} from '@testing-library/react';
import { AddMessage } from './index';
import { messages } from '../../fixtures/messages';
import { RootReducersType } from '../../state/reducers';
import { fillForm, withProvider, withRouter } from "../../test-utils";
import * as messagesActions from '../../state/actions/messagesActions';

const stateLoadingMessages: RootReducersType = {
  messages: { items: [], loading: true },
};

const stateWithMessages: RootReducersType = {
  messages: { items: messages, loading: false },
};

const stateWithoutMessages: RootReducersType = {
  messages: { items: [], loading: false },
};

describe('AddMessage view', () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });
  afterAll(() => {
    // jest.restoreAllMocks()
  });
  describe.each([
    ['the store has messages', stateWithMessages],
    ['the store has not any messages', stateWithoutMessages],
    ['the store is loading messages', stateLoadingMessages],
  ])('given %s', (_, state) => {
    it('should render the view correctly by default', () => {
      // Given
      const ProvidedAddMessage = withProvider(AddMessage)(state);

      // When
      const { container } = render(withRouter(ProvidedAddMessage));

      // Then
      expect(container).toMatchSnapshot();
    });
  });

  it('should handle the form submit', async () => {
    // Given
    const sendMessageSpy = jest.spyOn(messagesActions, 'sendMessage');
    const ProvidedAddMessage = withProvider(AddMessage)(stateWithMessages);
    const { getByTestId } = render(withRouter(ProvidedAddMessage));

    // When
    await fillForm(getByTestId, { title: 'title', message: 'message' }, true);

    // Then
    expect(sendMessageSpy).toHaveBeenCalledTimes(1);
    sendMessageSpy.mockRestore();
  });
});
