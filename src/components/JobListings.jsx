import React from 'react';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// import "../styles.css";

const bullet = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function JobListings(props) {
  const { filteredJobs, filters, setFilters } = props;

  const applyFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      display="flex"
      justifyContent="center"
      paddingBottom={5}
      sx={{
        position: "absolute",
        top: "180px",
        width: "100%",
        // backgroundColor: 'var(--background-light-gray-cyan)'
      }}
    >
      {filteredJobs.length > 0
        ? filteredJobs.map((job) => (
          <Grid
            key={job.id}
            size={10}
            sx={[{
              "&:hover": {
                cursor:"pointer",
                borderLeft: '4px solid var(--primary-dark-cyan)',
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px'
            }}]}
          >
            <Paper elevation={8} component="div">
              <Card
                sx={{
                  display: "flex",
                  padding: "24px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={job.logo}
                  alt={`${job.company} logo`}
                  sx={{ width: "100px" }}
                />
                <Box sx={{}}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography>{job.company}</Typography>
                    {job.new && (
                      <Chip
                        label="NEW!"
                        sx={{
                          margin: "0 4px",
                          backgroundColor: 'var(--primary-dark-cyan)',
                          color: 'var(--white)'
                        }}
                      />
                    )}
                    {job.featured && (
                      <Chip
                        label="FEATURED"
                        sx={[
                          {
                            margin: "0 4px",
                            color: "var(--white)",
                            backgroundColor: "var(--very-dark-gray-cyan)",
                          },
                        ]}
                      />
                    )}
                  </Box>
                  <Box>
                    <Typography>{job.position}</Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography>{job.postedAt}</Typography>
                    {bullet}
                    <Typography>{job.contract}</Typography>
                    {bullet}
                    <Typography>{job.location}</Typography>
                  </Box>
                </Box>
                <Box>
                  {job.filters.map((filter) => (
                    <Chip
                      className="filter"
                      key={filter}
                      label={filter}
                      sx={[
                        {
                          borderRadius: "4px",
                          margin: "0 8px",
                          color: "var(--primary-dark-cyan)",
                          backgroundColor:
                            "var(--filters-light-gray-cyan)",
                          fontWeight: "700",
                        },
                        {
                          "&:hover": {
                            color: "var(--filters-light-gray-cyan)",
                            backgroundColor: "var(--primary-dark-cyan)",
                          },
                        },
                      ]}
                      onClick={() => applyFilter(filter)}
                    />
                  ))}
                </Box>
              </Card>
            </Paper>
          </Grid>
        ))
        : null}
    </Grid>
  );
}
