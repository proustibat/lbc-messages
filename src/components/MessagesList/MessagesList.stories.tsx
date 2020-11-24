import React from 'react';
import { Story, Meta } from '@storybook/react';

import {
  MessagesList as MessagesListComponent,
  MessagesListProps,
} from './index';
import { messages } from '../../fixtures/messages';

export default {
  title: 'MessagesList',
  component: MessagesListComponent,
} as Meta;

const Template: Story<MessagesListProps> = args => (
  <MessagesListComponent {...args} />
);

export const MessagesListWithData = Template.bind({});
MessagesListWithData.args = {
  messages,
};
export const MessagesListEmpty = Template.bind({});
MessagesListEmpty.args = {
  messages: [],
};
