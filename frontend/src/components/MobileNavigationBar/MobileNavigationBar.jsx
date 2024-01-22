
// Hooks
import { useEffect, useState } from "react";

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
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth < 576)

        })
    }, [])

    return (
        <Box className="mobile-navbar" sx={{ position: 'fixed', bottom: 0, width: 1.0 }}>
            <BottomNavigation
                value={value}
                style={{display: isMobile ? "flex" : "none"}}
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
