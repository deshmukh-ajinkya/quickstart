import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
/**
@author      : Developer Name Here
@date        : 2024-08-11
@description : User authetication component
@params      : void
@return      : react elements
*/
function Login(): React.ReactElement {
  const navigate = useNavigate();
  const handleLogin = (): void => {
    localStorage.setItem('token', 'token');
    navigate('/reactbasekit/');
  };
  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '250px',
          padding: '24px',
          gap: 2,
          border: '1px solid gray',
          borderRadius: '12px',
          justifyContent: 'center'
        }}>
        <Typography variant="h5" fontWeight={600} textAlign="center">
          Login
        </Typography>
        <TextField variant="outlined" size="small" defaultValue={'demo@xyz.com'} />
        <TextField variant="outlined" size="small" defaultValue={'password'} type="password" />
        <Button variant="contained" sx={{ textTransform: 'capitalize' }} onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
