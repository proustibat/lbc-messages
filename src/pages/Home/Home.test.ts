import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './index';
import { messages } from '../../fixtures/messages';
import { RootReducersType } from '../../state/reducers';
import { withProvider, withRouter } from '../../test-utils';

const stateLoadingMessages: RootReducersType = {
  messages: { items: [], loading: true },
};

const stateWithMessages: RootReducersType = {
  messages: { items: messages, loading: false },
};

const stateWithoutMessages: RootReducersType = {
  messages: { items: [], loading: false },
};

describe('Home view', () => {
  describe.each([
    ['the store has messages', stateWithMessages],
    ['the store has not any messages', stateWithoutMessages],
    ['the store is loading messages', stateLoadingMessages],
  ])('given %s', (_, state) => {
    it('should render the view correctly by default', () => {
      // Given
      const ProvidedHome = withProvider(Home)(state);

      // When
      const { container } = render(withRouter(ProvidedHome));

      // Then
      expect(container).toMatchSnapshot();
    });
  });
});
