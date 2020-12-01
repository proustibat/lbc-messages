import { messagesActionTypes as Actions } from '../actionsTypes';
export const API_URL_GET_MESSAGES = '/01ce1c8d';
export const API_URL_POST_MESSAGE = '/b32b976b';

export const requestMessages = () => ({
  type: Actions.REQUEST_MESSAGES,
  payload: {
    request: {
      url: API_URL_GET_MESSAGES,
      method: 'GET',
    },
  },
});

export const sendMessage = (data: { title: string; message: string }) => ({
  type: Actions.SEND_MESSAGE,
  payload: {
    request: {
      url: API_URL_POST_MESSAGE,
      method: 'POST',
      data,
    },
  },
});
