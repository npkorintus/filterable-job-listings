import React from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import RemoveIcon from "./../assets/icon-remove.svg";

export default function Filter(props) {
  const { filter, filters, setFilters, removable } = props;

  const applyFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const handleRemove = (e) => {
    const removed = e.target.id;
    setFilters(activeFilters => activeFilters.filter(filter => filter !== removed));
  };

  return (
    removable ? (
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
    ) : (
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
          {
            "&:hover": {
              color: "var(--filters-light-gray-cyan)",
              backgroundColor: "var(--primary-dark-cyan)",
            },
          },
        ]}
        onClick={() => applyFilter(filter)}
      />
    )
  );
}
