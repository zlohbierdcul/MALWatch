// React
import { useState } from 'react';

// Styling
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Components
import LoginView from './views/LoginView/LoginView';
import NavigationBar from './components/NavigationBar/NavigationBar';
import MobileNavigationBar from './components/MobileNavigationBar/MobileNavigationBar';
import HomeView from './views/HomeView/HomeView';
import StarRating from './components/StarRating/StarRating';


// MUI custom theme palette 
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
                    <StarRating></StarRating>
                    <MobileNavigationBar></MobileNavigationBar>
                </>
            )}
        </ThemeProvider>
    );
}

export default App;
