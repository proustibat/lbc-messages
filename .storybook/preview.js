import React, { Suspense } from 'react';
import { addDecorator } from '@storybook/react';
import { withMuiTheme } from '@harelpls/storybook-addon-materialui';
import themes from '../src/themes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
};

addDecorator(
  withMuiTheme({
    Brownwave: themes.Brownwave,
    Cralga: themes.Cralga,
    None: null,
  }),
);
