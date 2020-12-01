import {
  API_URL_GET_MESSAGES,
  API_URL_POST_MESSAGE,
  requestMessages,
  sendMessage,
} from '../messagesActions';
import { messagesActionTypes } from '../../actionsTypes';

describe('Messages Actions', () => {
  it('should set up request messages action with right type and payload', () => {
    // Given / When
    const action = requestMessages();

    // Then
    expect(action).toStrictEqual({
      type: messagesActionTypes.REQUEST_MESSAGES,
      payload: { request: { url: API_URL_GET_MESSAGES, method: 'GET' } },
    });
  });

  it('should set up sending message action with right type and payload', () => {
    // Given / When
    const data = { title: 'blabliblou', message: 'youpi' };
    const action = sendMessage(data);

    // Then
    expect(action).toStrictEqual({
      type: messagesActionTypes.SEND_MESSAGE,
      payload: { request: { url: API_URL_POST_MESSAGE, method: 'POST', data } },
    });
  });
});
