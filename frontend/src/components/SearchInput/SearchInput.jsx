import { Search } from '@mui/icons-material';
import { InputBase } from '@mui/material';
import styles from './SearchInput.module.css';

export default function SearchInput() {
    return (
        <>
            <div className={styles.searchContainer}>
                <div className={styles.searchIconContainer}>
                    <Search></Search>
                </div>
                <InputBase className={styles.searchInput}></InputBase>
            </div>
        </>
    );
}
