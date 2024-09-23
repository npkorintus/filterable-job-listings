import React from 'react';

import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid2";
import Typography from '@mui/material/Typography';

import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import Job from './Job';

export default function JobListings(props) {
  const { filteredJobs, filters, setFilters } = props;

  return (
    filteredJobs?.length > 0 ?
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="center"
        paddingBottom={5}
        sx={{
          position: "absolute",
          top: "180px",
          width: "100%"
        }}
      >
        {filteredJobs.map((job) => <Job key={job.id} job={job} filters={filters} setFilters={setFilters} />)}
      </Grid>
      :
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '64px'
      }}>
        <WarningAmberIcon sx={{ fontSize: '100px' }} />
        <Typography variant="h3">There are no jobs to display.</Typography>
      </Box>
  );
}
