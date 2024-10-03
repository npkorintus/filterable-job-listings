import { useState } from "react";

import { createTheme, ThemeProvider } from '@mui/material';

import Error from "./components/Error";
import FilterBar from "./components/FilterBar";
import JobListings from "./components/JobListings";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

import useFetch from "./hooks/useFetch";
import { useAllJobs, useFilteredJobs } from "./hooks/useJobs";

import "./App.css";
import "./styles.css";

const theme = createTheme({
  typography: {
    fontFamily: ['League Spartan'],
    fontSize: 15,
    fontWeightRegular: 500,
    fontWeightBold: 700
  }
})

function App() {
  const { data, isLoading, error } = useFetch("/data/jobs.json");
  const [filters, setFilters] = useState([]);
  const { jobs } = useAllJobs(data);
  const { filteredJobs } = useFilteredJobs(jobs, filters);

  console.log(filteredJobs)
  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <FilterBar filters={filters} setFilters={setFilters} />
        <JobListings filteredJobs={filteredJobs} filters={filters} setFilters={setFilters} />
    </Layout>
    </ThemeProvider>
  );
}

export default App;
