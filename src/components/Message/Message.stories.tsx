import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Message as MessageComponent, MessageProps } from './index';

export default {
  title: 'Message',
  component: MessageComponent,
} as Meta;

const Template: Story<MessageProps> = args => <MessageComponent {...args} />;

export const Message = Template.bind({});
Message.args = {
  title: 'My message title',
  body: 'Here is my message body.',
};
