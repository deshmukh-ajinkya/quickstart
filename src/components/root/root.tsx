import DashboardIcon from '@mui/icons-material/Dashboard';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import StreamIcon from '@mui/icons-material/Stream';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './style.css';

function Root(): React.ReactElement {
  return (
    <Box className="rootContainer">
      <Box className="header">
        <Box className="logoContainer">
          <Box component="img" src={Logo} className="logoImage" />
          <Typography className="appName">App Name</Typography>
        </Box>
      </Box>
      <Box className="navBar">
        <Box className="navLinkContainer">
          <Box className="navLink">
            <DashboardIcon fontSize="small" />
            <Link to="/">Dashboard</Link>
          </Box>
          <Box className="navLink">
            <StreamIcon fontSize="small" />
            <Link to="/activity">Activity</Link>
          </Box>
          <Box className="navLink">
            <Diversity3Icon fontSize="small" />
            <Link to="/group">Group</Link>
          </Box>
          <Box className="navLink">
            <EmailIcon fontSize="small" />
            <Link to="/messages">Messages</Link>
          </Box>
          <Box
            className="navLink"
            onClick={() => {
              localStorage.removeItem('token');
              window.location.reload();
            }}>
            <LogoutIcon fontSize="small" />
            <Link to="/login">Logout</Link>
          </Box>
        </Box>
      </Box>
      <Box className="contentContainer">
        <Outlet />
      </Box>
    </Box>
  );
}

export default Root;
