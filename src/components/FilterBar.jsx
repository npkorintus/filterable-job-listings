import React from 'react';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Filter from './Filter';

export default function FilterBar(props) {
  const { filters, setFilters } = props;

  return (
    <Grid
      container
      spacing={2}
      display="flex"
      justifyContent="center"
      sx={{
        position: "absolute",
        width: "100%"
      }}
    >
      <Grid size={10} sx={{ transform: "translateY(-50%)" }}>
        {filters.length > 0 && (
          <Paper elevation={8} component="div">
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: "20px 40px",
                alignItems: 'center'
              }}
            >
              <Box display="flex">
                {filters.map((filter) => (
                  <Filter key={filter} filter={filter} filters={filters} setFilters={setFilters} removable />
                ))}
              </Box>
              <Box>
                <Typography
                  className="clearFilters"
                  sx={[
                    {
                      color: "var(--dark-gray-cyan)",
                      fontWeight: 700,
                    },
                    {
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "var(--primary-dark-cyan)",
                      },
                    },
                  ]}
                  onClick={() => setFilters([])}
                >
                  Clear
                </Typography>
              </Box>
            </Card>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
}
