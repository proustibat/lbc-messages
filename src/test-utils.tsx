import React from 'react';
import configureStore, { MockStore } from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import { RootReducersType } from './state/reducers';
import { act, fireEvent } from "@testing-library/react";

export const getMockedStore = (
  initialState: RootReducersType = { messages: { items: [], loading: false } },
) => {
  const createMockStore = configureStore([thunk]);
  const mockStore: MockStore = createMockStore(initialState);
  return mockStore;
};

export const withProvider = (WrappedComponent: React.ComponentType<any>) => (
  initialState: RootReducersType,
) => (props: any) => {
  return (
    <Provider store={getMockedStore(initialState)}>
      <WrappedComponent {...props} />
    </Provider>
  );
};

export const withRouter = (children: any) => {
  return (
    <MemoryRouter>
      <Route>{children}</Route>
    </MemoryRouter>
  );
};

export const fillForm = async (
  getByTestId: (id: string) => HTMLElement,
  { title, message }: { title: string; message: string },
  shouldSubmit: boolean = false,
) => {
  const inputTitle = getByTestId('input-title').querySelector(
    'input',
  ) as HTMLInputElement;
  const inputMessage = getByTestId('input-message').querySelector(
    'textarea',
  ) as HTMLTextAreaElement;
  const buttonSubmit = getByTestId('submit-button');

  await act(async () => {
    await fireEvent.change(inputTitle, { target: { value: title } });
    await fireEvent.change(inputMessage, { target: { value: message } });
    shouldSubmit && (await fireEvent.click(buttonSubmit));
  });
};
