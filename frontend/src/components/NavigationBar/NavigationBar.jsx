import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';


const NavigationBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='lightDark'>
                <Toolbar>
                    <img src='/assets/logo.png' height={'30px'}></img>
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavigationBar;
