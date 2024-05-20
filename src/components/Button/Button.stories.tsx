import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button Primary',
    type: "primary",
    href: "#",
    className: "",
  }
};

export const Secondary: Story = {
  args: {
    children: 'Button Secondary',
    type: "secondary",
    href: "#",
    className: "",
  }
};
