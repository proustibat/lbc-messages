import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MessageForm as MessageFormComponent, MessageFormProps } from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'MessageForm',
  component: MessageFormComponent,
} as Meta;

const Template: Story<MessageFormProps> = args => (
  <MessageFormComponent {...args} />
);

export const MessageForm = Template.bind({});
MessageForm.args = {
  onSubmit: data => action('onSubmit')(data),
  loading: false
};
