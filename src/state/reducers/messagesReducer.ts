import { messagesActionTypes as Actions } from '../actionsTypes';
import { MessageProps } from '../../components/Message';

export type MessagesReducerType = {
  items: MessageProps[];
  loading: boolean;
};

const initialState: MessagesReducerType = {
  items: [],
  loading: false,
};

const messagesReducer = (
  state = initialState,
  action: { type: Actions; payload: {messages: MessageProps[]} },
) => {
  switch (action.type) {
    case Actions.GET_MESSAGES:
      return {
        ...state,
        loading: true,
      };
    case Actions.GET_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case Actions.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        items: action.payload?.messages,
        loading: false,
      };
    default:
      return state;
  }
};

export default messagesReducer;
