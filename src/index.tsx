import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import App from './App';
import AppLoader from "./components/AppLoader";
import reportWebVitals from './reportWebVitals';

// TODO: replace loading app message with an animation
ReactDOM.render(
  <Suspense fallback={<AppLoader/>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
