import type { StorybookConfig } from '@storybook/vue3-vite';
import vue from '@vitejs/plugin-vue';

const config: StorybookConfig = {
  "stories": [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {
      docgen: {
        plugin: 'vue-component-meta',
        tsconfig: './.storybook/tsconfig.json'
      }
    }
  },
  async viteFinal(config) {
    // Insert Vue plugin before component-meta plugin so it can process .vue files
    const componentMetaIndex = config.plugins?.findIndex((p: any) => 
      p?.name === 'storybook:vue-component-meta-plugin'
    );
    
    if (componentMetaIndex > -1) {
      config.plugins?.splice(componentMetaIndex, 0, vue());
    }
    
    return config;
  }
};
export default config;