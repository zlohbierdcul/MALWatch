// Styling
import { Stack } from '@mui/material';
import styles from './NavigationBar.module.css';

// Components
import Toolbar from '@mui/material/Toolbar';
import SearchInput from '@Components/SearchInput/SearchInput';


const NavigationBar = () => {
    return (
        <Stack className={styles.navContainer}>
            <div
                className={styles.navBar}
            >
                <Toolbar>
                    <img
                        src='/assets/logo.png'
                        height={'30px'}
                    ></img>
                    <div className={styles.navLinkContainer + ' gap-5'}>
                        <div className={`${styles.navLink} ${styles.selected}`}>
                            Home
                        </div>
                        <div className={styles.navLink}>MyList</div>
                        <div className={styles.navLink}>Discover</div>
                    </div>
                    <SearchInput></SearchInput>
                </Toolbar>
            </div>
        </Stack>
    );
};

export default NavigationBar;
