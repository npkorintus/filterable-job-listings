import React from 'react';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Filter from './Filter';

const Badge = ({ label, backgroundColor }) => {
  return (
    <strong>
      <Chip
        label={label}
        sx={{
          margin: "0 4px",
          backgroundColor: backgroundColor,
          color: 'var(--white)'
        }}
      />
    </strong>
  )
};

const bullet = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "8px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Job(props) {
  const { job, filters, setFilters } = props;

  return (
    <Grid
      key={job.id}
      size={10}
      sx={[{
        "&:hover": {
          cursor: "pointer",
          borderLeft: '4px solid var(--primary-dark-cyan)',
          borderTopLeftRadius: '4px',
          borderBottomLeftRadius: '4px'
        }
      }]}
    >
      <Paper elevation={8} component="div">
        <Card
          sx={{
            display: { sm: "block", md: "flex" },
            padding: "24px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box component="span" sx={{ display: { xs: 'block', sm: 'flex' } }}>
            <CardMedia
              component="img"
              image={job.logo}
              alt={`${job.company} logo`}
              sx={{ width: "100px" }}
            />
            <Box component="span" ml={3} alignSelf="center">
              <Box component="span" display="flex">
                <Typography sx={{ color: 'var(--primary-dark-cyan)', fontWeight: 700 }}>{job.company}</Typography>
                {job.new && <Badge label={'NEW!'} backgroundColor={'var(--primary-dark-cyan)'} />}
                {job.featured && <Badge label={'FEATURED'} backgroundColor={'var(--very-dark-gray-cyan)'} />}
              </Box>
              <Box component="span">
                <Typography sx={{ fontWeight: 700 }}>{job.position}</Typography>
              </Box>
              <Box component="span" display="flex" sx={{ color: 'var(--dark-gray-cyan)'}}>
                <Typography>{job.postedAt}</Typography>
                {bullet}
                <Typography>{job.contract}</Typography>
                {bullet}
                <Typography>{job.location}</Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ margin: '24px 0' }} />
          <Box component="span">
            {job.filters.map((filter) => (
              <Filter key={filter} filter={filter} filters={filters} setFilters={setFilters} />
            ))}
          </Box>
        </Card>
      </Paper>
    </Grid>
  );
}
