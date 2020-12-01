import { AxiosResponse } from 'axios';
import { messagesActionTypes as Actions } from '../actionsTypes';
import { MessageProps } from '../../components/Message';

export type MessagesReducerType = {
  items: MessageProps[];
  loading: boolean;
};

export const initialState: MessagesReducerType = {
  items: [],
  loading: false,
};

const messagesReducer = (
  state = initialState,
  action: {
    type: Actions;
    payload?: { data?: unknown; request?: AxiosResponse };
  },
) => {
  switch (action.type) {
    case Actions.REQUEST_MESSAGES:
      return {
        ...state,
        loading: true,
      };
    case Actions.REQUEST_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case Actions.REQUEST_MESSAGES_SUCCESS:
      return {
        ...state,
        items: (action?.payload?.data as { messages: MessageProps[] })
          ?.messages,
        loading: false,
      };
    case Actions.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload?.data
        ],
        loading: false,
      };
    default:
      return state;
  }
};

export default messagesReducer;
