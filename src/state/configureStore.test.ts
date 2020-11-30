import configureStore from './configureStore';
import { initialState as initialStateMessages } from './reducers/messagesReducer';

describe('configureStore', () => {
  it.only('should set up the store', () => {
    // Given / When
    const store = configureStore();

    // Then
    expect(store.getState()).toStrictEqual({ messages: initialStateMessages });
  });
});
