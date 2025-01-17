import React from "react";

import { StoryFn, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button'
};

export const Simple = () => <Button>Simple!</Button>