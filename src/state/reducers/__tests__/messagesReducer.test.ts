import messagesReducer, { initialState } from '../messagesReducer';
import { messagesActionTypes as Actions } from '../../actionsTypes';
import { messages } from '../../../fixtures/messages';

describe('Messages Reducer', () => {
  it('should set up default values', () => {
    // Given / When
    const state = messagesReducer(undefined, { type: Actions.INIT });

    // Then
    expect(state).toEqual(initialState);
  });

  it('should save messages and set loading false when requesting messages with success', () => {
    // Given
    const action = {
      type: Actions.REQUEST_MESSAGES_SUCCESS,
      payload: { data: { messages } },
    };
    const expectedStateAfterMessagesRequesting = {
      items: messages,
      loading: false,
    };

    // When
    const state = messagesReducer(initialState, action);

    // Then
    expect(state).toStrictEqual(expectedStateAfterMessagesRequesting);
  });

  it('should set loading state when requesting messages begins', () => {
    // Given
    const action = { type: Actions.REQUEST_MESSAGES };
    const expectedStateAfterMessagesRequesting = { items: [], loading: true };

    // When
    const state = messagesReducer(initialState, action);

    // Then
    expect(state).toStrictEqual(expectedStateAfterMessagesRequesting);
  });

  it('should set loading state when requesting messages fails', () => {
    // Given
    const action = { type: Actions.REQUEST_MESSAGES_FAILURE };
    const expectedStateAfterMessagesRequesting = { items: [], loading: false };

    // When
    const state = messagesReducer(initialState, action);

    // Then
    expect(state).toStrictEqual(expectedStateAfterMessagesRequesting);
  });

  it('should save the new message when sending it', () => {
    // Given
    const payload = { data: { title: 'my title', message: 'my message' } };
    const action = { type: Actions.SEND_MESSAGE_SUCCESS, payload };
    const expectedState = { items: [payload.data], loading: false };

    // When
    const state = messagesReducer(initialState, action);

    // Then
    expect(state).toStrictEqual(expectedState);
  });
});
