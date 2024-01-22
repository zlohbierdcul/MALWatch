import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginView from './views/LoginView';

const theme = createTheme({
    palette: {
        primary: {
            main: '#9EE493'
        },
        secondary: {
            main: '#F95738'
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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <LoginView></LoginView>
        </ThemeProvider>
    );
}

export default App;
