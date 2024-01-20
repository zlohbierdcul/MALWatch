/** @type { import('@storybook/react').Preview } */

import { themes } from '@storybook/theming';
import 'bootstrap/dist/css/bootstrap.min.css';

const preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
