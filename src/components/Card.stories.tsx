import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';
import React from 'react';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Testitest',
  imgUrl: './bayern.jpg',
  description: 'Hello World',
  button: true
};
