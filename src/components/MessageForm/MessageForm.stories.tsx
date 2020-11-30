import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MessageForm as MessageFormComponent } from './index';

export default {
  title: 'MessageForm',
  component: MessageFormComponent,
} as Meta;

const Template: Story = args => <MessageFormComponent {...args} />;

export const MessageForm = Template.bind({});
