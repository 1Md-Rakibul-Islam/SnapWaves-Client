import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressLoading = () => {

  return (
    <Box sx={{ width: '100%', mt: 5 }}>
      <LinearProgress />
    </Box>
  );
}

export default ProgressLoading;