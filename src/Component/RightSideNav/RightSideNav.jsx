import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import React from 'react';

const RightSideNav = () => {
    
    const navItems = ['Home', 'About', 'Contact'];

    return (
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ ":hover": { color: 'primary.main'} }}>
              <HomeIcon sx={{mr: 2}} ></HomeIcon> <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ ":hover": { color: 'primary.main'} }}>
              <NotificationsIcon sx={{mr: 2}}></NotificationsIcon> <ListItemText primary={'Notifications'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ ":hover": { color: 'primary.main'} }}>
            <MailIcon sx={{mr: 2}}></MailIcon> <ListItemText primary={'Messagese'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ ":hover": { color: 'primary.main'} }}>
              <AccountCircleRoundedIcon sx={{ mr: 2}}></AccountCircleRoundedIcon> <ListItemText primary={'Profile'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ ":hover": { color: 'primary.main'} }}>
              <SettingsIcon sx={{ mr: 2 }}></SettingsIcon> <ListItemText primary={'Settings'} />
            </ListItemButton>
          </ListItem>
      </List>
    );
};

export default RightSideNav;