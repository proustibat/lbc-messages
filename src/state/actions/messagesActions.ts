import { messagesActionTypes as Actions } from '../actionsTypes';

export const requestMessages = () => ({
  type: Actions.REQUEST_MESSAGES,
  payload: {
    request: {
      url: `https://api.mocki.io/v1/01ce1c8d`,
    },
  },
});
