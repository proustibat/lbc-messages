import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { RootStateOrAny } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  responseType: 'json',
});

const middlewares = [thunk, axiosMiddleware(client)];

const configureStore = (preloadedState?: RootStateOrAny) => {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
};

export default configureStore;
