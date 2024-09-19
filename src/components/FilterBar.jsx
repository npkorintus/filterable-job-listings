import React from 'react';

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import RemoveIcon from "./../assets/icon-remove.svg";

export default function FilterBar(props) {
  const { filters, setFilters } = props;

  const handleRemove = (e) => {
    const removed = e.target.id;
    setFilters(activeFilters => activeFilters.filter(filter => filter !== removed));
  };

  return (
    <Grid container spacing={2} display="flex" justifyContent="center">
      <Grid size={10} sx={{ transform: "translateY(-50%)" }}>
        {filters.length > 0 && (
          <Paper elevation={8} component="div">
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: "24px",
                alignItems: 'center'
              }}
            >
              <Box display="flex">
                {filters.map((filter) => (
                  <Box
                    key={filter}
                    sx={{
                      backgroundColor: "var(--filters-light-gray-cyan)",
                      borderRadius: "4px",
                    }}
                    display="flex"
                    mr={2}
                  >
                    <Chip
                      className="filter"
                      key={filter}
                      label={filter}
                      sx={[
                        {
                          borderRadius: "4px",
                          margin: "0 8px",
                          color: "var(--primary-dark-cyan)",
                          backgroundColor: "var(--filters-light-gray-cyan)",
                          fontWeight: "700",
                        },
                      ]}
                    />
                    <Box
                      sx={[
                        {
                          backgroundColor: "var(--primary-dark-cyan)",
                          borderRadius: "0 4px 4px 0",
                        },
                        {
                          "&:hover": {
                            cursor: "pointer",
                            backgroundColor: "var(--black)",
                          },
                        },
                      ]}
                      display="flex"
                      alignItems="center"
                      p={0.5}
                      onClick={handleRemove}
                    >
                      <img
                        className="removeFilter"
                        src={RemoveIcon}
                        style={{ padding: "4px" }}
                        id={filter}
                      />
                    </Box>
                  </Box>
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
