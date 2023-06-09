import * as React from 'react';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';

import { useState } from 'react';


function Header({user}) {

    const [menuOpen, setMenuOpen] = useState(false)

    function handleToggleMenu(){
        setMenuOpen(!menuOpen)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleToggleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="secondary">
                        News
                    </Typography>
                    {
                     user.logged 
                        ?  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="secondary">{user.email}</Typography>
                        :   <Button color="secondary"> <a href="/login">Login</a></Button>
                    }
                </Toolbar>
            </AppBar>
            <Drawer open={menuOpen} onClose={handleToggleMenu}>
                <List>
                    <ListItem button>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText><a href="/">Home</a></ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><PersonAddIcon/></ListItemIcon>
                        <ListItemText><a href="/users">Cadastro de Clientes</a></ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><LoginIcon/></ListItemIcon>
                        <ListItemText><a href="/login">Login</a></ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    )
}

export default Header