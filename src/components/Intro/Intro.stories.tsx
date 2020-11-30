import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Intro as IntroComponent } from './index';

export default {
  title: 'Intro',
  component: IntroComponent,
} as Meta;

const Template: Story = args => <IntroComponent {...args} />;

export const Intro = Template.bind({});
