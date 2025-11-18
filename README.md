# Storybook + Vue 3 - Vite Proof of Concenpt

A proof of concept demonstrating Storybook integration with a Nuxt application using standalone Vue 3 Storybook (not the Nuxt Storybook module), Tailwind CSS for styling, and automatic documentation generation from JSDoc comments.

## Overview

This project showcases:

- **Standalone Storybook** - Uses `@storybook/vue3-vite` instead of `@nuxtjs/storybook` for more control and flexibility
- **Tailwind CSS Integration** - Tailwind styling works in both Nuxt and Storybook environments
- **Automatic Documentation** - Component props and types are automatically documented in Storybook using `vue-component-meta` docgen
- **TypeScript Support** - Full TypeScript support with proper type extraction for component props

## Key Features

### Vue Component Meta Docgen
Components use TypeScript interfaces with JSDoc comments that are automatically extracted and displayed in Storybook:

```vue
<script setup lang="ts">
const { label, disabled, isPill, type } = defineProps<{
	/**
	 * The text to display inside the button
	 */
	label?: string;
	/**
	 * Whether the button is disabled
	 */
	disabled?: boolean;
    /**
	 * Whether the button should have rounded styling
	 */
	isPill?: boolean;
	/**
	 * The HTML button type attribute (button, submit, or reset)
	 */
	type: 'button' | 'submit' | 'reset';
}>();
</script>
```

The JSDoc comments automatically appear in Storybook's Controls panel and documentation without manual `argTypes` configuration.

## Setup

Install dependencies:

```bash
npm install
```

## Running the Project

### Storybook Development

Start Storybook on `http://localhost:6006`:

```bash
npm run storybook
```

## Configuration Details

### Storybook Configuration

The `.storybook/main.ts` configuration includes:

1. **Vue Component Meta Plugin** - Extracts TypeScript types and JSDoc comments
2. **Custom TypeScript Config** - Uses `.storybook/tsconfig.json` for proper type resolution
3. **Vite Final Hook** - Ensures Vue plugin is loaded before component-meta plugin

### Tailwind Configuration

- PostCSS configured with `tailwindcss` and `autoprefixer`
- Tailwind imported in `.storybook/preview.ts` for Storybook
- `@nuxtjs/tailwindcss` module for Nuxt integration

## Learn More

- [Storybook Documentation](https://storybook.js.org/docs)
- [Nuxt Documentation](https://nuxt.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vue Component Meta](https://github.com/vuejs/language-tools/tree/master/packages/component-meta)
EOF
