import { messagesActionTypes as Actions } from '../actionsTypes';
export const API_URL_GET_MESSAGES = 'https://api.mocki.io/v1/01ce1c8d';
export const requestMessages = () => ({
  type: Actions.REQUEST_MESSAGES,
  payload: {
    request: {
      url: API_URL_GET_MESSAGES,
    },
  },
});
