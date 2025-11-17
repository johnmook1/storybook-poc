import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

const meta = {
  title: 'Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    label: 'Submit',
    isPill: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof Button>;

export const SubmitButtonStory: Story = {};