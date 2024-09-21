import React from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(50vh + 100px)'
      }}
    >
      <CircularProgress size="100px" sx={{ color: 'var(--primary-dark-cyan)' }} />
    </Box>
  )
  ;
}
