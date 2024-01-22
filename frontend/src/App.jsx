import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginView from './views/LoginView/LoginView';
import { useState } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import MobileNavigationBar from './components/MobileNavigationBar/MobileNavigationBar';
import HomeView from './views/HomeView/HomeView';

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
            main: '#676b6d',
        },
        dark: {
            main: '#141414',
        },
        lightDark: {
            main: '#35393C',
        },
    },
});

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            {!loggedIn && <LoginView setLoggedIn={setLoggedIn}></LoginView>}
            {loggedIn && (
                <>
                    <NavigationBar></NavigationBar>
                    <HomeView></HomeView>
                    <MobileNavigationBar></MobileNavigationBar>
                </>
            )}
        </ThemeProvider>
    );
}

export default App;
