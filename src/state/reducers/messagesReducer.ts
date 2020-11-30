import { AxiosResponse } from 'axios';
import {
  messagesActionTypes as Actions,
  SUFFIX_SUCCESS,
  SUFFIX_FAILURE,
} from '../actionsTypes';
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
  action: {
    type: Actions;
    payload: { data?: unknown; request?: AxiosResponse };
  },
) => {
  switch (action.type) {
    case Actions.REQUEST_MESSAGES:
      return {
        ...state,
        loading: true,
      };
    case `${Actions.REQUEST_MESSAGES}${SUFFIX_FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    case `${Actions.REQUEST_MESSAGES}${SUFFIX_SUCCESS}`:
      console.log({ action });
      return {
        ...state,
        items: (action?.payload?.data as { messages: MessageProps[] })
          ?.messages,
        loading: false,
      };
    default:
      return state;
  }
};

export default messagesReducer;
