import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

const meta = {
  title: 'Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    label: 'Click Me',
    disabled: false,
    type: 'button',
  },
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButtonStory: Story = {}

export const SubmitButtonStory: Story = {
  args: {
    type: 'submit',
    label: 'Submit',
  },
};