
// Hooks
import { useEffect, useState } from "react";

// CSS
import "./MobileNavigationBar.css"

// Components
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// Icons
import { CenterFocusStrongRounded, HomeRounded, ListRounded, SearchRounded } from '@mui/icons-material';
import { Stack } from "@mui/material";


function MobileNavigationBar() {
    const [value, setValue] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

    useEffect(() => {
        // ResizeListener to hide Navigation on desktop
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth < 576)

        })
    }, [])

    return (
        <Stack className="mobile-navbar" sx={{ position: 'fixed', bottom: 0, width: 1.0 }}>
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
        </Stack>
    );
}

export default MobileNavigationBar;
