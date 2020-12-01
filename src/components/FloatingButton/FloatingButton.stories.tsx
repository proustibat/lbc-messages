import React from "react";
import { Meta, Story } from "@storybook/react";

import {
  FloatingButton as FloatingButtonComponent,
  FloatingButtonProps,
  IconVariant
} from "./index";
import { action } from "@storybook/addon-actions";

export default {
  title: 'components/FloatingButton',
  component: FloatingButtonComponent,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: [IconVariant.ADD, IconVariant.HOME],
      },
    },
  }
} as Meta;

const Template: Story<FloatingButtonProps> = args => <FloatingButtonComponent {...args} />;

export const FloatingButton = Template.bind({});
FloatingButton.args = {
  onClick: () => action('onClick')(),
  disabled: false,
  icon: IconVariant.ADD,
};
