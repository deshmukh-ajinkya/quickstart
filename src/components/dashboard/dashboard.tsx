import { Box, Typography } from '@mui/material';
import React from 'react';

function Dashboard(): React.ReactElement {
  return (
    <Typography variant="h4">
      <Box fontSize={24} component="a" href="https://github.com/deshmukh-ajinkya/reactbasekit">
        Follow Readme From Github To Get Started
      </Box>
    </Typography>
  );
}

export default Dashboard;
