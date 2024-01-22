/** @type { import('@storybook/react').Preview } */
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './preview.css';

import { themes } from '@storybook/theming';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#9EE493',
        },
        secondary: {
            main: '#F95738',
        },
        grey: {
            main: '#535759',
        },
        lightGrey: {
            main: '#676b6d'
        },
        dark: {
            main: '#141414',
        },
        lightDark: {
            main: '#35393C',
        }
    },
});

export default {
    parameters: {
        backgrounds: {
            default: 'dark',
        },
        docs: {
            theme: themes.dark,
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <div className='preview'>
                <ThemeProvider theme={theme}>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
};
