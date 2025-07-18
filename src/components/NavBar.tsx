
import { AppBar, Toolbar, Typography } from '@mui/material';

function NavBar() {

    return (
        <AppBar sx={{ backgroundColor: 'background.default' }} elevation={2}>
            <Toolbar>
                <Typography variant='h4' component="h1" color="primary" >VP Shunt Studio
                </Typography>
            </Toolbar>
        </AppBar>
    );

}

export { NavBar };