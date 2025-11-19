import type { Preview, VueRenderer } from '@storybook/vue3'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../assets/css/main.css'

const preview: Preview = {
  decorators: [
    withThemeByClassName<VueRenderer>({
      themes: {
        'STSH': 'theme-stsh',
        'FDLN': 'theme-fdln',
        'GNTC': 'theme-gntc',
      },
      defaultTheme: 'STSH',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;