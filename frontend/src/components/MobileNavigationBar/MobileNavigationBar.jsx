
// Hooks
import { useState } from "react";

// CSS
import "./MobileNavigationBar.css"

// Components
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// Icons
import { CenterFocusStrongRounded, HomeRounded, ListRounded, SearchRounded } from '@mui/icons-material';


function MobileNavigationBar() {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ width: 500 }} className="mobile-navbar">
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    label='Home'
                    icon={<HomeRounded />}
                />
                <BottomNavigationAction
                    label='MyList'
                    icon={<ListRounded />}
                />
                <BottomNavigationAction
                    label='Discover'
                    icon={<CenterFocusStrongRounded />}
                />
                <BottomNavigationAction
                    label='Search'
                    icon={<SearchRounded />}
                />
            </BottomNavigation>
        </Box>
    );
}

export default MobileNavigationBar;
