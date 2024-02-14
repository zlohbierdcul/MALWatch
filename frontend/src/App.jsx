// React
import { useState } from 'react'

// Components
import NavigationBar from '@Components/NavigationBar/NavigationBar'
import MobileNavigationBar from '@Components/MobileNavigationBar/MobileNavigationBar'
import StarRating from '@Components/StarRating/StarRating'

// Views
import LoginView from '@Views/LoginView/LoginView'
import HomeView from '@Views/HomeView/HomeView'

// Styling
import { ThemeProvider } from '@mui/material/styles'

// Utils
import { theme } from '@Utils/css/theme'

const App = () => {
	const [loggedIn, setLoggedIn] = useState(true)
	return (
		<ThemeProvider theme={theme}>
			{!loggedIn && <LoginView setLoggedIn={setLoggedIn}></LoginView>}
			{loggedIn && (
				<>
					<NavigationBar></NavigationBar>
					<HomeView></HomeView>
					<StarRating rating={4.3}></StarRating>
					<MobileNavigationBar></MobileNavigationBar>
				</>
			)}
		</ThemeProvider>
	)
}

export default App
