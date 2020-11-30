import { API_URL_GET_MESSAGES, requestMessages } from '../messagesActions';
import { messagesActionTypes } from '../../actionsTypes';

describe('Messages Actions', () => {
  it.only('should set up request messages action with right type and payload', () => {
    // Given / When
    const action = requestMessages();

    // Then
    expect(action).toStrictEqual({
      type: messagesActionTypes.REQUEST_MESSAGES,
      payload: { request: { url: API_URL_GET_MESSAGES } },
    });
  });
});
