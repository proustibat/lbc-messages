import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ButtonPlus as ButtonPlusComponent, ButtonPlusProps } from './index';

export default {
  title: 'ButtonPlus',
  component: ButtonPlusComponent,
} as Meta;

const Template: Story<ButtonPlusProps> = args => <ButtonPlusComponent {...args} />;

export const ButtonPlus = Template.bind({});
ButtonPlus.args = {
  onClick: () => {},
  disabled: false
};
