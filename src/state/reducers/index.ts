import { combineReducers } from 'redux';
import messages, {MessagesReducerType} from './messagesReducer';

export type RootReducersType = {
  messages: MessagesReducerType
};
export default combineReducers({
  messages,
});
