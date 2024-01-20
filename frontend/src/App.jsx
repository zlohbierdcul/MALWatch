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
        lightGrey: {
            main: '#829399'
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
